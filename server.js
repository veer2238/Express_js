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


server.post('/demo',async(req,res)=>{
  res.send("send")
  // res.json(req,body)

  // let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'veer2238rajput@gmail.com',
            pass: 'jeasqtbfommzmxya'
        },
      });

      let info = await transporter.sendMail({
        from: 'veer2238rajput@gmail.com', // sender address
        to: 'lalu2238rajput@gmail.com', // list of receivers
        // cc:"himasnhu0409agraval@gmail.com",
        subject: "thanks for registration", // Subject line
        text: "Hello world?", // plain text body
        html: req.body.name+"<br>"+req.body.phone+"<br>"+req.body.message
      });

      let info1 = await transporter.sendMail({
        from: 'veer2238rajput@gmail.com', // sender address
        to: req.body.email, // list of receivers
        // cc:"himasnhu0409agraval@gmail.com",
        subject: "thanks for registration", // Subject line
        text: "Hello world?", // plain text body
        html:"thanks for registration"
      });

      console.log("Message sent: %s", info.messageId,info1.messageId);

    
})





// Set Templating Enginge
// app.set('view engine', 'ejs')

// main().catch(err => console.log(err));
// console.log('server is runing')
// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/signin');
//   console.log('dbconnected');
// }
// const userSchema = new mongoose.Schema({
//     name: String
//   });
//   const User = mongoose.model('User', userSchema);

// app.use(cors());
// app.use(bodyParser.json());

// app.get('/', (req, res)=> {
//     res.render('index')
// })

// app.get('/home', (req, res)=> {
//     res.render('home')
   
// })
// app.get('/signup', (req, res)=> {
//   res.render('signup')
 
// })
// app.get('/about', (req, res)=> {
//   res.render('about')
 
// })




// app.post('/signin',async (req, res)=> {
//   let testAccount = await nodemailer.createTestAccount();

//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//           user: 'svming7@gmail.com',
//           pass: 'sbpsvipogsahmavl'
//       },
//     });

//     let info = await transporter.sendMail({
//       from: 'svming7@gmail.com', // sender address
//       to: req.body.Email, // list of receivers
//       cc:"ajexrombo@gmail.com",
//       subject: "thanks for registration", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<h1 style=transform:rotate(560deg)> Thanks For Subscribing </h1>"
//     });

//     console.log("Message sent: %s", info.messageId);

//     let user = new User()
//     user.username = req.body.username;
//     user.Email = req.body.Email;
//     user.Password = req.body.Password;
//     const doc = await user.save();

//     console.log(doc)
//     res.json(doc);
// })

server.listen(8080, () => {
  console.log("server connected");
});