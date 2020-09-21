const express = require('express')
const app = express()

app.get('/server', (req, res)=>{
    res.send("Welcome to params calculator")
})

app.get('/server/tambah/:a/:b', (req, res)=>{
    let a = req.params.a
    let b = req.params.b
    
    aa = parseInt(a)
    bb = parseInt(b)

    let value = aa + bb
    let output = a + " + " + b + " = " + value
    res.send(" Hasil dari "+ output)
})

app.get('/server/kurang/:a/:b', (req, res)=>{
    let a = req.params.a
    let b = req.params.b
      
    let value = a - b
    let output = a + " - " + b + " = " + value
    res.send(" Hasil dari "+ output)
})

app.get('/server/kali/:a/:b', (req, res)=>{
    let a = req.params.a
    let b = req.params.b
      
    let value = a * b
    let output = a + " x " + b + " = " + value
    res.send(" Hasil dari "+ output)
})

app.get('/server/bagi/:a/:b', (req, res)=>{
    let params = req.params

    let output
    if(params.b == 0){
        output = "Angka kedua tidak bolen 0"
        res.send(" "+ output)
    }else{   
        let value = params.a / params.b
    
        output = params.a + " / " + params.b + " = " + value
        res.send(" Hasil dari "+ output)
    }
})

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})