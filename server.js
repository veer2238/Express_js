const express = require('express');
const cors = require('cors')
// const cors = require('cors');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const sendmail = require('sendmail');




const server = express()

server.use(cors())
server.use(bodyParser.json())


server.use('/',(req,res)=>{
  res.send("ok")
 

})

server.listen(8080, () => {
  console.log("server connected");
});