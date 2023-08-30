import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
    const activeQuiz = await prisma.quiz.findFirst({
        where: {
            active: true
        }
    })

    if (activeQuiz) {

        console.log(activeQuiz)
        return NextResponse.json({
            quiz: {
                name: activeQuiz.name,
                link: activeQuiz.link,
                date: '12.06.2024',
                time: '12:00',
                price: '700',
                limit: activeQuiz.usersLimit.toString()
            }
        })
    }

    return NextResponse.json({
        quiz: null
    })
}