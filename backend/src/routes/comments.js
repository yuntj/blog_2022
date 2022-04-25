const express = require('express')
const router = express.Router()
const { authMiddleware } = require('../middleware/admin/auth.middleware')

const CommentController = require('../controller/comments')

router.post('/:slug', authMiddleware, CommentController.createComment)//创建评论
router.get('/:slug', authMiddleware, CommentController.getComments)//评论列表
router.delete('/:slug/:id', authMiddleware, CommentController.deleteComment)//删除某条评论

module.exports = router