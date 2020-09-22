const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/dotext', (req, res, next)=> {
    let name = req.body.name

    let split = name.match(/[a-z]/gi," ")

    let result = split.toString().replace(/,/g,"")
    next(result)
})

app.get('/text', (req, res)=>{
    res.render('text', {data : null})
})

app.post('/dotext', (req, res)=>{
    // let result = ''

    // for(let i=0; i<=split.length ;i++){

    //     if(split[i].match(/\[a-zA-Z]/i)){
            
    //         console.log(match)
    //     }
    // }
    
    res.render('text', {data : result})
})

app.listen(3000, () => {
    console.log('App listening on port 3000!')
});