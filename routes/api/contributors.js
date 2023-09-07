const express = require('express')
const router = express.Router()
const contributorsCtrl = require('../../controllers/api/contributors')


// SHOW
router.get('/:id', contributorsCtrl.show)

// INDEX CONTRIBUTORS
router.get('/', contributorsCtrl.indexContributors)

module.exports = router