import {NextApiRequest, NextApiResponse} from "next";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>,
) {
    const email = req.body.email;

    try {
        const newSubscription = await prisma.emailSubcription.create({
            data: {
                email: email
            }
        });
        res.status(200).json({ email: email});
    }
    catch (e:any){
        res.status(500).json({ email: email});
    }

}