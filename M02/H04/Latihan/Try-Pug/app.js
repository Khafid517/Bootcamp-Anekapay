const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=>{
    res.send("Try PUG")
})

app.get('/hello', (req, res)=>{
    let data = null
    res.render('hello', {data : null})
})

app.post('/hello', (req, res)=>{
    let data = req.body.name
    res.render('hello', { data : data})
})

app.listen(3000, () => {
    console.log('App listening on port 3000!')
});