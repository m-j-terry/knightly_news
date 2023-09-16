const express = require('express')
const router = express.Router()
const editionsCtrl = require('../../controllers/api/editions')


// SHOW
router.get('/:id', editionsCtrl.show)

// INDEX EDITIONS
router.get('/', editionsCtrl.indexEditions)


module.exports = router