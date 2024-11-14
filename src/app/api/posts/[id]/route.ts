import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: any) {
    // get params id
    const id = parseInt(params.id);

    // get detail post
    const post = await prisma.post.findUnique({
        where: {
            id
        }
    })

    if (!post) {
        return NextResponse.json(
            {
                success: true,
                message: 'Detail data post not found!',
                data: null
            },
            {
                status: 404
            }
        )
    }

    return NextResponse.json(
        {
            success: true,
            message: 'Detail data post',
            data: post
        },
        {
            status: 200
        }
    )
}

export async function PATCH(req: Request, { params }: any) {
    const id = parseInt(params.id);

    // get request data
    const { title, content } = await req.json();

    // update data
    const post = await prisma.post.update({
        where: {
            id
        },
        data: {
            title: title,
            content: content,
            updatedAt: new Date()
        }
    })

    return NextResponse.json(
        {
            success: true,
            message: 'Data Post Updated!',
            data: post
        },
        {
            status: 200
        }
    )
}

export async function DELETE(req: Request, { params }: any) {
    const id = parseInt(params.id);

    await prisma.post.delete({
        where: {
            id
        }
    })

    return NextResponse.json(
        {
            success: true,
            message: 'Data Post Deleted!'
        },
        {
            status: 200
        }
    )
}