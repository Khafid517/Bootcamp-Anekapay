var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/date', function(req, res, next) {
  res.render('indexx', { tittle: 'Date'})
})

module.exports = router
