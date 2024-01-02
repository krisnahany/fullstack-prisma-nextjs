import prisma from "@/lib/prisma";

// export const dynamic = 'force-dynamic'
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

export async function GET() {

    try {
        const data = await prisma.user.findMany();
        return Response.json({ success: true, data }, { status: 200 })
    } catch (err) {
        Response.json({ err: "Error occured while adding a new user." }, { status: 403 })
    }
}