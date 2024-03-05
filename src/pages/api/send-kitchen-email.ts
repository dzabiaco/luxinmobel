// send-kitchen-email

import {NextApiRequest, NextApiResponse} from "next";
const nodemailer = require('nodemailer');

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>,
) {
    const kitchenData = req.body.kitchen;

    const {...rest} = kitchenData;

    console.log(rest);


    let message = ``;

    if(rest.type === "straight"){
        message = `<ul>
            <li>Type: ${rest.type}</li>
            <li>Width: ${rest.width}</li>
            <li>Height: ${rest.height}</li>
            <li>Floors: ${rest.floor}</li>
            <li>Kitchen Style: ${rest.style}</li>
        </ul>`;
    }

    else if(rest.type === "angle"){
        message = `<ul>
            <li>Type: ${rest.type}</li>
            <li>Width A: ${rest.widthA}</li>
            <li>Height A: ${rest.heightA}</li>
            <li>Width B: ${rest.widthB}</li>
            <li>Height B: ${rest.heightB}</li>
            <li>Floors: ${rest.floor}</li>
            <li>Kitchen Style: ${rest.style}</li>
        </ul>`;
    }

    else if(rest.type === "pform"){
        message = `<ul>
            <li>Type: ${rest.type}</li>
            <li>Width A: ${rest.widthA}</li>
            <li>Height A: ${rest.heightA}</li>
            <li>Width B: ${rest.widthB}</li>
            <li>Height B: ${rest.heightB}</li>
            <li>Width C: ${rest.widthC}</li>
            <li>Height C: ${rest.heightC}</li>
            <li>Floors: ${rest.floor}</li>
            <li>Kitchen Style: ${rest.style}</li>
        </ul>`;
    }

    else if(rest.type === "island"){
        message = `<ul>
            <li>Type: ${rest.type}</li>
            <li>Width A: ${rest.widthA}</li>
            <li>Height A: ${rest.heightA}</li>
            <li>Width B: ${rest.widthB}</li>
            <li>Height B: ${rest.heightB}</li>
            
            <li>Width C: ${rest.widthIsland}</li>
            <li>Height C: ${rest.heightIsland}</li>
            <li>Floors: ${rest.floor}</li>
            <li>Kitchen Style: ${rest.style}</li>
        </ul>`;
    }


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
            pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: rest.email,
        subject: `Kitchen Order`,
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