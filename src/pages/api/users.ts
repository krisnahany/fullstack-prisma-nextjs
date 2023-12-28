import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const result = await prisma.user.findMany()
        return res.status(201).json({ success: true, result });
    } catch (err) {
        res.status(403).json({ err: "Error aja" });
    }
}