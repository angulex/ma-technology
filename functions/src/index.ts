import { https, config } from 'firebase-functions';
import { initializeApp } from 'firebase-admin';
import * as mailgun from 'mailgun-js';
const cors = require('cors')({ origin: true });

initializeApp();

// SET firebase environment variable:
// firebase functions:config:set objectName.objectKey="objectValue"

// GET all firebase environment variables:
// firebase functions:config:get

// DELETE firebase environment variable:
// firebase functions:config:unset objectName.objectKey

const mg = mailgun({ apiKey: config().mailgun.key, domain: config().mailgun.domain });

exports.sendEmail = https.onRequest((req: any, res: any) => {
    cors(req, res, () => {
        const data = {
            from: `${req.body.name} <${req.body.email}>`,
            to: `${config().contact.email}`,
            subject: `${req.body.subject}`,
            text: `${req.body.message}`,
        };

        mg.messages().send(data)
            .then((body) => res.status(200).json({ message: 'Successfully sent E-Mail!' }))
            .catch((err: Error) => {
                console.log(err);
                return res.status(502).json({ message: 'Error in sending E-Mail via Contact Form. Try sending manually.', error: err })
            });
    })
});