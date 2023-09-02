const Contributor = require('../../models/contributor')

async function create(req, res){
    try {
        const contributor = await Contributor.create(req.body)
        res.status(200).json(contributor)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function show(req, res){
    try {
        const contributor = await Contributor.findById({ _id: req.params.id })
        res.status(200).json(contributor)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function indexContributors(req, res){
    try {
        const contributors = await Contributor.find({}).sort('name', 1)
        res.status(200).json(contributors)
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
        const contributor = await Contributor.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!contributor) throw new Error('Contributor not found')
        res.status(200).json(contributor)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function destroy(req, res){
    try {
        const contributor = await Contributor.findById({ _id: req.params.id })
        await contributor.deleteOne()
        res.status(200).json({ message: 'Contributor deleted' })
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