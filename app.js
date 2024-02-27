import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express'
import nodemailer from 'nodemailer'
import 'dotenv/config'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()

app.use(express.static(__dirname+'\\public'))

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email,
      pass: process.env.password
    }
  });
  
  var mailOptions = {
    from: 'darsh10@somaiya.edu',
    to: 'madhurima.v@somaiya.edu',
    subject: 'Sending Email using Node.js',
    text: 'Thank you for contacting us',
    html: '<h1>Welcome</h1><p>Please dont text us again</p>'
  };
  

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

app.post('/contact',function(req,res){
    console.log(process.env.email)
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    // console.log("hello beautiful")
})




app.listen(1000,function (req,res){
    console.log("server started at port number 1000")
})


