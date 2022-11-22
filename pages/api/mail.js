const nodemailer = require("nodemailer");

export default function handler(req, res) {
  let transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "chieu.dang@stunited.vn",
      pass: "Lamchieu99@",
    },
    secure: true,
  });

  transporter
    .sendMail({
      from: "chieu.dang@stunited.vn",
      to: "chieu.dang@stunited.vn",
      subject: `Message From ${req.body.email}`,
      html: `<div>${req.body.message}</div><p>Sent from:
       ${req.body.email}</p><p>Message:
       ${req.body.message}</p>`,
    })
    .then((res) => {
      res.status(200);
    })
    .catch((err) => {
      res.send(err);
    });
}
