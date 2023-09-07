const Administrator = require('../../models/administrator')
const Category = require('../../models/category')
const Contributor = require('../../models/contributor')
const Article = require('../../models/article')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cloudinary = require('../../src/utilities/cloudinary')

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
            const cloudinaryImageData = await cloudinary.uploader.upload(req.body.imageUrl, { public_id: req.body.publicId }, function(error, result) { console.log('testing ' + error + result) })
            const contributor = await Contributor.findOne({ _id: req.body.contributorId })
            const category = await Category.findOne({ category: req.body.category })
            const article = await Article.create({
                title: req.body.title,
                contributor: contributor,
                category: category,
                publicId: req.body.publicId,
                imageUrl: cloudinaryImageData.secure_url,
                imageSource: req.body.imageSource,
                text: req.body.text
            })
            res.status(200).json(article)
        } catch (error) {
            res.status(400).json({ message: error.message })
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
    async login(req, res, next ) {
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
    apiController
}