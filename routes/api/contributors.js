const express = require('express')
const router = express.Router()
const contributorsCtrl = require('../../controllers/api/contributors')


// SHOW
router.get('/:id', contributorsCtrl.show)

// SHOW NAME
router.get('/name/:id', contributorsCtrl.showName)

// INDEX CONTRIBUTORS
router.get('/', contributorsCtrl.indexContributors)

module.exports = router