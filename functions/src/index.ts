import { https, config } from 'firebase-functions';
import { initializeApp } from 'firebase-admin';
import * as nodemailer from 'nodemailer';
const cors = require('cors')({ origin: true });

initializeApp();

// SET firebase environment variable:
// firebase functions:config:set objectName.objectKey="objectValue"

// GET all firebase environment variables:
// firebase functions:config:get

// DELETE firebase environment variable:
// firebase functions:config:unset objectName.objectKey

const transporter = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: config().mailgun.user,
    pass: config().mailgun.pass,
  },
});

exports.sendEmail = https.onRequest((req: any, res: any) => {
  cors(req, res, () => {
    const data = {
      from: `${req.body.name} <${req.body.email}>`,
      to: `${config().contact.email}`,
      subject: `${req.body.subject}`,
      text: `${req.body.message}`,
    };

    transporter
      .sendMail(data)
      .then(() =>
        res.status(200).json({ message: 'Successfully sent E-Mail!' })
      )
      .catch((err: Error) => {
        console.log(err);
        return res.status(502).json({
          message:
            'Error in sending E-Mail via Contact Form. Try sending manually.',
          error: err,
        });
      });
  });
});
