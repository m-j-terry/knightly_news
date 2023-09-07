const Contributor = require('../../models/contributor')

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

module.exports = {
    show,
    indexContributors,
}