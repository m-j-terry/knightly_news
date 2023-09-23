const express = require('express')
const router = express.Router()
const archiveCtrl = require('../../controllers/api/archives')

// SHOW
router.get('/:id', archiveCtrl.showArchive)

// INDEX 
router.get('/', archiveCtrl.indexArchives)
// MOSTRECENT
router.get('/index/hotOffThePress', archiveCtrl.getMostRecentArchive)

module.exports = router