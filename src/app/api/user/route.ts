import prisma from "@/lib/prisma";

// reference : https://docs.hanko.io/tutorials/nextjs-todo
export async function POST(req: Request) {
    const data = await req.json();

    try {
        const result = await prisma.user.create({
            data: {
                ...data
            }
        })

        return Response.json({ success: true, result }, { status: 201 })
    } catch (err) {
        console.log(err);
        Response.json({ err: "Error occured while adding a new user." }, { status: 403 })
    }
}