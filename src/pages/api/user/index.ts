import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

// POST /api/user

// required fields in body: name, email
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body
    try {
        const result = await prisma.user.create({
            data: {
                ...data
            }
        })

        return res.status(201).json({ success: true, result });
    } catch (err) {
        console.log(err);
        res.status(403).json({ err: "Error occured while adding a new user." });
    }
}