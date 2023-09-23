const express = require('express')
const router = express.Router()
const articlesCtrl = require('../../controllers/api/articles')
const categoriesCtrl = require('../../controllers/api/categories')

// SHOW
router.get('/:id', articlesCtrl.show)

// SHOW FEATURED
router.get('/show/featured', articlesCtrl.getFeaturedArticle)

// INDEX
router.get('/', articlesCtrl.index)

// INDEX / CATEGORY
router.get('/category:id', categoriesCtrl.indexCategoryArticles)

module.exports = router