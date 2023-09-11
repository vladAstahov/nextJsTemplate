import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(req: Request) {
    const quizes = await prisma.quiz.findMany()

    return NextResponse.json({
        data: quizes.map(quiz => ({
            ...quiz,
            usersLimit: quiz.usersLimit.toString()
        }))
    })
}