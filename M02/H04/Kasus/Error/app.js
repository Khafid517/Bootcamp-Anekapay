const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

var createError = require('http-errors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.use(function(req, res, next) {
    next(createError(404))
  })
  
  app.use(function(err, req, res, next) {

    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.render('error')
  })

app.get('/', (req, res)=>{
    res.send("Try EJS")
})

app.get('/hello', (req, res)=>{
    res.render('hello', {data : null})
})

app.post('/hello', (req, res)=>{
    let name = req.body.name
    console.log(name)
    res.render('hello', {data : name})
})



app.listen(3000, () => {
    console.log('App listening on port 3000!')
});