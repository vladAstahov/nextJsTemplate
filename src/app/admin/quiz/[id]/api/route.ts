import { NextResponse } from "next/server"
import prisma from "../../../../../../lib/prisma"

export async function GET(req: Request) {
    const { id } = await req.json() as {
        id: string
    }

    const quiz = await prisma.quiz.findUniqe({
        where: {
            id
        }
    })
    const questions = await prisma.question.findMany({
        where: {
            quizId: quiz.id
        }
    })
    const answers = questions.reduce(async (prev, curr) => {
        const current = await prisma.answer.findMany({
            where: {
                questionId: curr.id
            }
        })

        return [
            ...prev,
            ...current
        ]
    }, [])

    return NextResponse.json({
        quiz,
        questions,
        answers
    })
}