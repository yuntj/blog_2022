const express = require('express')
const router = express.Router()
const UserController = require('../controller/users')
const { authMiddleware } = require('../middleware/admin/auth.middleware')

router.post('/', UserController.createUser)
router.post('/login',UserController.login)
router.get('/',authMiddleware,UserController.getUser)
router.patch('/',authMiddleware,UserController.updateUser)//局部更新

module.exports = router