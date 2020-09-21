/**
 * Module dependencies
 */

const express = require('express')
const path = require('path')

const app = express()

const usersRouter = require('./router/router.user')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/users', usersRouter)

app.listen(3000, () => {
    console.log('App listening on port 3000!');
})