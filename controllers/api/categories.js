const Category = require('../../models/category')
const Article = require('../../models/article')

async function show(req, res){
    try {
        const category = await Category.findById({ _id: req.params.id })
        res.status(200).json(category)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
async function indexCategories(req, res){
    try {
        const categories = await Category.find({}).sort('name')
        res.status(200).json(categories)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function indexCategoryArticles(req, res) {
    try {
        const category = await Category.findById(req.params.id)
        const articles = await Article.find({ category: category })
        res.status(200).json(articles)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    show,
    indexCategories,
    indexCategoryArticles
}