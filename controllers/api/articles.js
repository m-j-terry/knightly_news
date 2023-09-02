const Article = require('../../models/article')

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

module.exports = {
    show, 
    index
}