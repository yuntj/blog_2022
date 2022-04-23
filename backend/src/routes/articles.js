
const express = require('express')
const router = express.Router()
const { authMiddleware } = require('../middleware/admin/auth.middleware')

const ArticleController = require('../controller/articles')

router.post('/', authMiddleware, ArticleController.createArticle)
router.get('/:slug', authMiddleware, ArticleController.getArticle)
router.get('/', authMiddleware, ArticleController.getArticles)
router.get('/follow', authMiddleware, ArticleController.getFollowArticle)
router.put('/', authMiddleware, ArticleController.updateArticle)
router.delete('/', authMiddleware, ArticleController.deleteArticle)



module.exports = router