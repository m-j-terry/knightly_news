const Edition = require('../../models/edition')

async function show(req, res){
    try {
        const edition = await Edition.findById({ _id: req.params.id })
        res.status(200).json(edition)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
async function indexEditions(req, res){
    try {
        const editions = await Edition.find({})
        res.status(200).json(editions)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    show,
    indexEditions,
}