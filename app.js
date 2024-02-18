// var a = "darsh1"
// console.log(a)

import express from 'express'
const app = express()
app.get('/',function(req,res){
    res.write("<h1>Hello world!</h1>")
    res.send()
})

app.get('/product',function(req,res){
    res.write("<h1>your products are here</h1>")
    res.send()
})

app.get('/contact',function(req,res){
    res.write("<h1>contact here!</h1>")
    res.send()
})




app.listen(1000,function (req,res){
    console.log("server started at port number 1000")
})


