import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const userId = req.query.id;

    switch (req.method) {
        case 'DELETE':
            return handleDELETE(userId, res)

        default:
            throw new Error(
                `The HTTP ${req.method} method is not supported at this route.`
            )
    }
}

async function handleDELETE(userId: unknown, res: NextApiResponse<any>) {
    const user = await prisma.user.delete({
        where: {
            id: Number(userId)
        }
    })

    return res.json({ success: true, user })
}