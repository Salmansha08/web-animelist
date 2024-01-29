import prisma from "@/libs/prisma-libs"

export async function POST(request) {
    const { anime_mal_id, user_email, username, comment, anime_title } = await request.json()
    const data = {
        anime_mal_id,
        user_email,
        username,
        comment,
        anime_title
    }
    const createComment = await prisma.comment.create({
        data
    })

    if (!createComment) return Response.json({
        status: 500,
        message: "Internal Server Error",
        isCreated: false
    })
    else return Response.json({
        status: 200,
        message: "Success",
        isCreated: true
    })
}