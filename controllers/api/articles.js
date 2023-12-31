const Article = require('../../models/article')
const Category = require('../../models/category')

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

async function sortByCategory(req, res){
    try {
        console.log('out here!')
        const category = await Category.findById(req.body.category)
        console.log(category)
        const articles = await Article.find({ category: category._id })
        console.log(articles)
        res.status(200).json(articles)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function getFeaturedArticle(req, res) {
    try {
        const articles = await Article.find({ featured: true }).sort({ createdAt: -1 })
        const article = articles[0]
        res.status(200).json(article)
    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}

async function indexContributorArticles(req, res){
    try {
        const decodedName = decodeURIComponent(req.params.name)
        console.log(decodedName)
        const articles = await Article.find({ contributor: decodedName }).sort({ createdAt: -1 }).exec()
        res.status(200).json(articles)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    show, 
    index,
    sortByCategory,
    getFeaturedArticle,
    indexContributorArticles
}