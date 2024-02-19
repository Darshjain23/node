import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()

app.use(express.static(__dirname+'\\public'))

app.get('/',function(req,res){
    // res.write("<h1>Hello world!</h1>")
    res.sendFile(__dirname+'\\views\\index.html')
})

app.get('/product',function(req,res){
    // res.write("<h1>your products are here</h1>")
    res.sendFile(__dirname+'\\views\\product.html')
})

app.get('/contact',function(req,res){
    // res.write("<h1>contact here!</h1>")
    res.sendFile(__dirname+'\\views\\contact.html')
})




app.listen(1000,function (req,res){
    console.log("server started at port number 1000")
})


