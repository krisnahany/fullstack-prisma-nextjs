import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function DELETE(req: Request, { params: { id } }: { params: { id: string } }) {
    // const { id } = await req.json()

    const user = await prisma.user.delete({
        where: {
            id: Number(id)
        }
    })

    return Response.json({ success: true, user }, { status: 200 })
}