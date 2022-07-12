const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
        type: "login",
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});
  
contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.emailname;
    const email = req.body.emailemail;
    const message = req.body.emailmessage; 
    const mail = {
        from: name,
        to: process.env.SMTP_USER,
        subject: "Contact Form Submission",
        html:   `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.log(error)
            res.json({ status: "ERROR Cannot Sent" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});
