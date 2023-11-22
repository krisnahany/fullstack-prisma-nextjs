import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

// POST /api/user

// required fields in body: name, email
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const result = await prisma.user.create({
        data: {
            ...req.body
        }
    })

    return res.status(201).json(result);
}