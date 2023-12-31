const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.post('/contact', async (req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: 'veer2238rajput@gmail.com',
        pass: 'jeasqtbfommzmxya'
      },
    });

  

    let info = await transporter.sendMail({
      from: 'veer2238rajput@gmail.com',
      to: req.body.email,
      subject: "thanks for registration",
      text: "Hello world?",
      html: req.body.name + "<br>" + req.body.phone + "<br>" + req.body.message
    });

    console.log("Message sent: %s", info.messageId);

    // Respond with success
    res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});


server.post('/attendance', async (req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: 'veer2238rajput@gmail.com',
        pass: 'jeasqtbfommzmxya'
      },
    });

  

    let info = await transporter.sendMail({
      from: 'veer2238rajput@gmail.com',
      to: 'himanshu0409agraval@gmail.com',
      subject: "thanks for registration",
      text: "Hello world?",
      html: "my name is " +req.body.name + "<br>" +"i attend "+ req.body.date +" lecture"+ "<br>" +"my work:"+ req.body.work
    });

    console.log("Message sent: %s", info.messageId);

    // Respond with success
    res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

server.get('/',(req,res) =>{
  res.send("welcome")
})

server.listen(8080, () => {
  console.log("Server connected");
});
