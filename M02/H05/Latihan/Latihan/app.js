const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})

app.use('/user/:id', function (req, res, next) {
    console.log("Next")
    next()
})

app.get(('/user/:id'), function (req, res) {
    const id = req.params.id
    res.send(id)
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))