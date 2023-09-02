const Article = require('../../models/article')
const Category = require('../../models/category')
const Contributor = require('../../models/contributor')

async function create(req, res){
    try {
        const contributor = await Contributor.findOne({ name: req.body.name })
        const category = await Category.findOne({ category: req.body.category })
        const article = await Article.create({
            title: req.body.title,
            contributor: contributor,
            category: category,
            image: req.body.image,
            text: req.body.text
        })
        res.status(200).json(article)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function update(req, res){
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

async function show(req, res){
    try {
        const article = await Article.findById(req.params.id)
        res.status(200).json(article)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function index(req, res){
    try {
        const articles = await Article.find({})
        res.status(200).json(articles)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function destroy(req, res){
    try {
        const article = await Article.findOne({ _id: req.params.id })
        await article.deleteOne()
        if (!article) throw new Error('Article not found')
        res.status(200).json({ message: 'Article deleted' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    create, 
    update, 
    show, 
    index,
    destroy
}