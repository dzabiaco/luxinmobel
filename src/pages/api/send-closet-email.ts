import {NextApiRequest, NextApiResponse} from "next";
const nodemailer = require('nodemailer');

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>,
) {
    const closetData = req.body.closetData;

    const {address, phone, width, height, depth, doorStyle, drawers} = closetData;

    console.log({address, phone, width, height, depth, doorStyle, drawers});

    const message = `
        <ul>
            <li>Width: ${width}</li>
            <li>Height: ${height}</li>
            <li>Depth: ${depth}</li>
            <li>Door Style: ${doorStyle}</li>
            <li>Drawers: ${drawers}</li>
        </ul>
    `;


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
            pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: address,
        subject: `Closet Order`,
        html: message,
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