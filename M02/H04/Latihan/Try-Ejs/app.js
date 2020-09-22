const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

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