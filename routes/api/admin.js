const express = require('express')
const router = express.Router()
const { checkToken, adminCtrl, articlesCtrl, contributorsCtrl, apiController, categoriesCtrl, archiveCtrl, passwordCtrl } = require('../../controllers/api/administrators')
const { upload } = require('../../controllers/api/cloudinary')
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const password = require('../../models/password')

/*** ADMIN ROUTES ***/
// CREATE
router.post('/', adminCtrl.create, apiController.auth)

// LOGIN 
router.post('/login', adminCtrl.login, apiController.auth)

// UPDATE
router.put('/:id', adminCtrl.update, apiController.auth)

// DESTROY 
router.delete('/:id', adminCtrl.destroy)

// CHECKTOKEN 
router.get('/check-token', ensureLoggedIn, checkToken)

/*** ADMIN ARTICLE ROUTES ***/
// CREATE
router.post('/article', upload, articlesCtrl.create, apiController.auth)

// UPDATE
router.put('/article/:id', articlesCtrl.update, apiController.auth)

// DESTROY 
router.delete('/article/:id', articlesCtrl.destroy, apiController.auth)

/*** CONTRIBUTOR ROUTES ***/
// CREATE
router.post('/contributor', contributorsCtrl.create, apiController.auth)

// UPDATE
router.put('/contributor/:id', contributorsCtrl.update, apiController.auth)

// DESTROY 
router.delete('/contributor/:id', contributorsCtrl.destroy, apiController.auth)

/*** CATEGORY ROUTES ***/
router.post('/category', categoriesCtrl.create, apiController.auth)

/*** ARCHIVE ROUTES ***/
router.post('/pdf',  archiveCtrl.create, apiController.auth)

/*** PASSWORD ROUTES ***/
router.get('/password/:password', passwordCtrl.checkPassword)

router.post('/password', passwordCtrl.create)

module.exports = router
