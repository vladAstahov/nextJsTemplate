import { NextResponse } from "next/server";
// @ts-ignore
import prisma from "../../../../../lib/prisma";

export async function POST(req: Request) {
    const { quiz, questions, answers } = await req.json() as {
        quiz: {
            name: string,
            active: boolean,
            link: string,
            usersLimit: null
        },
        questions: {
            id: string
            text: string
            image: string
        }[],
        answers: {
            questionId: string
            text: string
            isCorrect: boolean
        }[]
    }

    // @ts-ignore
    const prismaQuiz = await prisma.quiz.create({
        data: {
            ...quiz,
            // started: false
        }
    })

    questions.forEach(async (question, index) => {
        // @ts-ignore
        const prismaQuestion = await prisma.question.create({
            data: {
                quizId: prismaQuiz.id,
                text: question.text,
                index: index,
                image: ''
            }
        })
        answers.filter(item => item.questionId === question.id).forEach(async (answer, index) => {
            // @ts-ignore
            await prisma.answer.create({
                data: {
                    text: answer.text,
                    isCorrect: answer.isCorrect,
                    questionId: prismaQuestion.id,
                }
            })
        })
    })

    return NextResponse.json({})
}