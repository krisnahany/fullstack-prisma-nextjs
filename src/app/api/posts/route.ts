import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const posts = await prisma.post.findMany();
        return Response.json(
            {
                success: true,
                message: 'List Data Posts',
                data: posts
            },
            {
                status: 200
            }
        )
    } catch (err) {
        Response.json(
            {
                err: `Error ${err}`
            },
            {
                status: 403
            }
        )
    }
}

// export async function POST(req: Request) {
//     // get all request
//     const { title, content } = await req.json();

//     // create data post
//     const post = await prisma.post.create({
//         data: {
//             title: title,
//             content: content
//         }
//     })

//     return Response.json(
//         {
//             success: true,
//             message: 'Post created successfully!',
//             data: post
//         },
//         {
//             status: 201
//         }
//     )
// }