const express = require('express')
const router = express.Router()
const { authMiddleware } = require('../middleware/admin/auth.middleware')
const TagsController = require('../controller/tags')


router.get('/', TagsController.getTags)
router.post('/', authMiddleware,TagsController.createTag)

module.exports = router