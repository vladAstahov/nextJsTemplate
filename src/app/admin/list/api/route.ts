import { NextResponse } from "next/server";
// @ts-ignore
import prisma from "../../../../../lib/prisma";

export async function GET(req: Request) {
    // @ts-ignore
    const quizes = await prisma.quiz.findMany()

    return NextResponse.json({
        // @ts-ignore
        data: quizes.map(quiz => ({
            ...quiz,
            usersLimit: quiz.usersLimit.toString()
        }))
    })
}