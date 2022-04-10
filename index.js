const express = require('express');
const { redirect } = require('statuses');
const app = express()
const port = 80
const port = 80
app.get('/', (req, res) => {
    res.send('api on')
})
app.post('/', (req, res) => {
    let nodemailer = require('nodemailer');
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'comunica.ana.pimentel@gmail.com',
            pass: '@comunica2022'
        }
    });
    const mailOptions = {
        from: 'comunica.ana.pimentel@gmail.com', // sender address
        to: 'icarobernar@hotmail.com', // receiver (use array of string for a list)
        subject: req.body.subject, // Subject line
        html: req.body.message// plain text body
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err)
        res.send({message: err})
        else
        res.send({message: info})
    });
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



