const { Timestamp } = require('mongodb')
const Archive = require('../../models/archive')

async function showArchive(req, res){
    try {
        const archive = await Archive.findById({ _id: req.params.id })
        res.status(200).json(archive)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
async function indexArchives(req, res){
    try {
        const archives = await Archive.find({})
        res.status(200).json(archives)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function getMostRecentArchive(req, res) {
    try {
        const archives = await Archive.find({}).sort({ createdAt: -1 })
        const archive = archives[0]
        res.status(200).json(archive)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    showArchive,
    indexArchives,
    getMostRecentArchive
}