const express = require('express')
const router = express.Router()
const articlesCtrl = require('../../controllers/api/articles')


// SHOW
router.get('/:id', articlesCtrl.show)

// INDEX
router.get('/', articlesCtrl.index)

module.exports = router