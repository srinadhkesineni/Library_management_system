const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "srinadhkesineni7@gmail.com",
        pass: "neymes@10",
    },
});

const sendMailHandler = async (email, subject, html) => {
    const mailOptions = {
        from: "srinadhkesineni7@gmail.com",
        to: email,
        subject: subject,
        html: html
    };
    await transporter.sendMail(mailOptions);
}

module.exports = { transporter, sendMailHandler }