const express = require('express')
const router = express.Router()
const categoriesCtrl = require('../../controllers/api/categories')


// SHOW
router.get('/:id', categoriesCtrl.show)

// INDEX CATEGORIES
router.get('/', categoriesCtrl.indexCategories)

// INDEX CATEGORY ARTICLES 
router.get('/articles/:id', categoriesCtrl.indexCategoryArticles)

module.exports = router