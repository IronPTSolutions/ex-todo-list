const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ironhackremotept@gmail.com",
    pass: process.env.MAIL_PASSWORD,
  },
});

module.exports.sendRegistrationEmail = (user) => {
  transporter
    .sendMail({
      from: "IronPT<ironhackremotept@gmail.com>",
      to: user.email,
      subject: "Welcome to ToDo List",
      html: `
        <h3>Hi ${user.name}!</h3>
        <p>Welcome to <b>todo list app</b></p>
        <p>please confirm your account using the following link:</p>
        <a href="http://localhost:3000/users/${user.id}/confirm">
            Activate your account
        </a>
    `,
    })
    .then(() => {
      console.log("email sent!");
    })
    .catch((err) => {
      console.error("error sending email, ", err);
    });
};
