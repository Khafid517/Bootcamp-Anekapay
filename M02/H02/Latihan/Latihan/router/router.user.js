/**
 * Router
 */

const { 
    listUser
} = require('../controller/controller.user')

const router = require('express').Router()

router.get('/', listUser)

module.exports = router