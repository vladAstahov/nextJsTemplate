import { NextResponse } from "next/server"
// @ts-ignore
import prisma from "../../../../../../lib/prisma"

export async function GET(req: Request) {
    const splitUrl = req.url.split('/')
    const id = splitUrl[splitUrl.length - 2]

    // @ts-ignore
    const promo = await prisma.promo.findUnique({
        where: {
            id
        }
    })

    return NextResponse.json({
        promo
    })
}

export async function PUT(req: Request) {
    const { id, ...promo } = await req.json() as {
        id: string
        quizId: string
        limit: string
        available: string
    }

    // @ts-ignore
    await prisma.promo.update({
        where: {
            id
        },
        data: promo
    })

    return NextResponse.json({})
}

export async function DELETE(req: Request) {
    const splitUrl = req.url.split('/')
    const id = splitUrl[splitUrl.length - 2]

    // @ts-ignore
    await prisma.promo.delete({
        where: {
            id
        }
    })

    return NextResponse.json({})
}