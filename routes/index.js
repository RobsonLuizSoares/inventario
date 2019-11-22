const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

//Routes

router.get('/', indexController.home)
router.get('/escolha', indexController.escolha)

module.exports = router