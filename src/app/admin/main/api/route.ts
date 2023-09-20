import { NextResponse } from "next/server";
// @ts-ignore
import prisma from "../../../../../lib/prisma";

export async function GET() {
    // @ts-ignore
    const main = await prisma.main.findUnique({
        where: {
            id: 1
        }
    })

    return NextResponse.json(main)
}

export async function PUT(req: Request) {
    const { id, ...main } = await req.json() as {
        id: number
        title: string,
        description: string
        time: string
        date: string
        quizId: string
        price: string
    }

    // @ts-ignore
    await prisma.main.update({
        where: {
            id
        },
        data: main
    })

    return NextResponse.json({})
}