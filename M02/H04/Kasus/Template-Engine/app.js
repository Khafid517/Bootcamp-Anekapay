const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))

// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'))

// app.get('/', (req, res)=>{
//     res.send("Try EJS")
// })

// app.get('/hello', (req, res)=>{
//     res.render('hello', {data : null})
// })

// app.post('/hello', (req, res)=>{
//     let name = req.body.name
//     console.log(name)
//     res.render('hello', {data : name})
// })

app.engine('apa', function (filePath, options, callback) { // define the template engine
    fs.readFile(filePath, function (err, content) {
        if (err) return callback(err)
        // this is an extremely simple template engine
        console.log('options')
        console.log(options)
        var rendered = content.toString()
            .replace('#title#', '<h1>' + options.title + '</h1>')
            .replace('#error#',   options.error )
            .replace('#message#', '<h1>' + options.message + '</h1>')
        return callback(null, rendered)
    })
})

app.set('view engine', 'apa') // register the template engine
app.set('views', 'views')
 
app.get('/Hallo', function (req, res) {
    res.render('hello', { title: 'Hallo', message: 'Hello Boi!' })
})

app.listen(3000, () => {
    console.log('App listening on port 3000!')
});