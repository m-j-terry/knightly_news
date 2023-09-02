const Contributor = require('../../models/contributor')

async function create(req, res){
    try {

        res.status(200).json()
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function show(req, res){
    try {

        res.status(200).json()
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function indexContributors(req, res){
    try {

        res.status(200).json()
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function indexContributorArticles(req, res){
    try {
        const contributor = await Contributor.findById(req.params.id)
        res.status(200).json(contributor.articles)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function update(req, res){
    try {

        res.status(200).json()
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function destroy(req, res){
    try {

        res.status(200).json()
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    create,
    show, 
    indexContributors, 
    indexContributorArticles,
    update,
    destroy
}