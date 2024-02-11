import {NextApiRequest, NextApiResponse} from "next";
const nodemailer = require('nodemailer');

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>,
) {
    const email = req.body.email;
    const name = req.body.name;
    const subject = req.body.subject;
    const message = req.body.message;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
            pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: email,
        subject: subject,
        text: message,
    };

    await transporter.sendMail(mailOptions, function (error:any, info:any) {
        console.log(error);
        if (error) {
            return res.status(500).json({message: "error"});
        } else {
            console.log("Email Sent");
            return res.status(200).json({message: "success"});
        }
    });


    // res.status(200).json({ name: "John Doe" });
}