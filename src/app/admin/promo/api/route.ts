import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET() {
    const promos = await prisma.promo.findMany()

    return NextResponse.json({
        data: promos
    })
}

export async function POST(req: Request) {
    const promo = await req.json() as {
        quizId: string
        limit: number
        available: number
    }

    const prismaPromo = await prisma.promo.create({
        data: promo
    })

    return NextResponse.json({
        id: prismaPromo.id
    })
}