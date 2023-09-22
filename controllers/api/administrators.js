const Administrator = require('../../models/administrator')
const Category = require('../../models/category')
const Contributor = require('../../models/contributor')
const Article = require('../../models/article')
const Edition = require('../../models/edition')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cloudinary = require('../../config/cloudinary')

const checkToken = (req, res) => {
    console.log('req.administrator', req.administrator)
    res.json(req.exp)
}

function createJWT(admin) {
    return jwt.sign(
        //data payload
        { admin },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}

const articlesCtrl = {
    async destroy(req, res){
        try {
            const article = await Article.findOne({ _id: req.params.id })
            await article.deleteOne()
            if (!article) throw new Error('Article not found')
            res.status(200).json({ message: 'Article deleted' })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    async create(req, res){
        try {
            if (res.locals.imageData) {
                console.log(res.locals.imageData)
                req.body.imageUrl = res.locals.imageData
            }
            console.log('req.body = ' + req.body)
            const contributor = await Contributor.findOne({ name: req.body.contributor })
            console.log(' contributor = ' + contributor)
            const category = req.body.category
            console.log('category = ' + category)
            const article = await Article.create({
                title: req.body.title,
                contributor: req.body.contributor,
                category: category,
                imageUrl: req.body.imageUrl,
                text: req.body.text
            })
            console.log('article = ' + article)
            contributor.articles.addToSet(article)
            await contributor.save()
            res.status(200).json(article)
        } catch (error) {
            res.status(401).json({ message: error.message })
        }
    },
    async update(req, res){
        try {
            const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true })
    
            if (!article) {
                return res.status(404).json({ error: 'Article not found'})
            } 
    
            res.status(200).json(article)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}

const editionCtrl = {
    async create(req, res, next) {
        try {
            const edition = await Edition.create(req.body)
            res.status(200).json(edition)
            next()
        } catch (error) {
            res.status(400).json({ message: error.message})
        }
    }
}

const adminCtrl = {
    async create(req, res, next) {
        try {
            console.log('here')
            const administrator = await Administrator.create(req.body)
            //token will be a string
            const token = createJWT(administrator)
            console.log('token = ' + token)
            res.locals.data.administrator = administrator
            res.locals.data.token = token

            next()
        } catch (error) {
            console.log('you got a database problem')
            res.status(400).json({ message: error.message})
        }
    },
    async login(req, res, next) {
        try {
            const administrator = await Administrator.findOne({ email: req.body.email })
            if (!administrator) throw new Error()
            const match = await bcrypt.compare(req.body.password, administrator.password)
            if (!match) throw new Error()
            res.locals.data.admin = administrator
            res.locals.data.token = createJWT(administrator)
            next()
        } catch (error) {
            res.status(400).json('Your credentials be whack')
        }
    },
    async update(req, res, next) {
        try {
            const administrator = await Administrator.findByIdAndUpdate(req.params.id, req.body, { new: true })
            if (!administrator) throw new Error('Administrator not found')
            res.locals.data.administrator = administrator
            next()
        } catch (error) {
            res.status(400).json('Was not able to update administrator info')
        }
    },
    async destroy(req, res) {
        try {
            const administrator = await Administrator.findOne({ _id: req.params.id })
            await administrator.deleteOne()
            if (!administrator) throw new Error('Administrator not found')
            res.status(200).json({ message: 'Administrator deleted' })
        } catch (error) {
            res.status(400).json('Administrator NOT Deleted')
        }
    }
    
}

const contributorsCtrl = {
    async create(req, res){
        try {
            const contributor = await Contributor.create(req.body)
            res.status(200).json(contributor)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    async update(req, res){
        try {
            const contributor = await Contributor.findByIdAndUpdate(req.params.id, req.body, { new: true })
            if (!contributor) throw new Error('Contributor not found')
            res.status(200).json(contributor)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    async destroy(req, res){
        try {
            const contributor = await Contributor.findById({ _id: req.params.id })
            await contributor.deleteOne()
            res.status(200).json({ message: 'Contributor deleted' })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}

const categoriesCtrl = {
    async create(req, res){
        try {
            const category = await Category.create(req.body)
            res.status(200).json(category)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}

const apiController = {
    auth (req, res) {
        res.json(res.locals.data.token)
    }
}

module.exports = {
    checkToken,
    createJWT, 
    adminCtrl,
    articlesCtrl,
    contributorsCtrl,
    categoriesCtrl,
    apiController,
    editionCtrl
}