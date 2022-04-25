const express = require('express')
const router = express.Router()
const { authMiddleware } = require('../middleware/admin/auth.middleware')

const FavoriteController = require('../controller/favorites')

router.post('/:slug', authMiddleware, FavoriteController.addFavorite)
router.delete('/:slug', authMiddleware, FavoriteController.removeFavorite)

module.exports = router