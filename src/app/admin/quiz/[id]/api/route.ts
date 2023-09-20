import { NextResponse } from "next/server"
// @ts-ignore
import prisma from "../../../../../../lib/prisma"

export async function GET(req: Request) {
    const splitUrl = req.url.split('/')
    const id = splitUrl[splitUrl.length - 2]

    // @ts-ignore
    const quiz = await prisma.quiz.findUnique({
        where: {
            id
        }
    })
    // @ts-ignore
    const questions = await prisma.question.findMany({
        where: {
            quizId: quiz.id
        }
    })

    // @ts-ignore
    const answers = await Promise.all(questions.map(async question => {
        // @ts-ignore
        const current = await prisma.answer.findMany({
            where: {
                questionId: question.id
            }
        })

        return current
    }))

    const convertedAnswers = answers.reduce((prev, curr) => {
        return {
            ...prev,
            [curr[0].questionId]: curr
        }
    }, {})

    return NextResponse.json({
        quiz: {
            ...quiz,
            usersLimit: quiz.usersLimit.toString()
        },
        questions,
        answers: convertedAnswers
    })
}

export async function PUT(req: Request) {
    const { quiz, questions, answers } = await req.json() as {
        quiz: {
            id: string
            name: string,
            active: boolean,
            link: string,
            usersLimit: number
        },
        questions: {
            id: string
            text: string
            image: string
        }[],
        answers: {
            id: string
            questionId: string
            text: string
            isCorrect: boolean
        }[]
    }

    // @ts-ignore
    const prismaQuiz = await prisma.quiz.update({
        where: {
            id: quiz.id
        },
        data: {
            name: quiz.name,
            active: quiz.active,
            link: quiz.link,
            usersLimit: quiz.usersLimit
        },
    })

    questions.forEach(async (question, index) => {
        // @ts-ignore
        const prismaQuestion = await prisma.question.upsert({
            where: {
                id: question.id
            },
            update: {
                text: question.text,
                index,
                image: ''
            },
            create: {
                quizId: prismaQuiz.id,
                text: question.text,
                index,
                image: ''
            }
        })
        answers.filter(item => item.questionId === question.id).forEach(async (answer, index) => {
            if (!Number(question.id)) {
                // @ts-ignore
                await prisma.answer.upsert({
                    where: {
                        id: answer.id
                    },
                    update: {
                        text: answer.text,
                        isCorrect: answer.isCorrect,
                    },
                    create: {
                        text: answer.text,
                        isCorrect: answer.isCorrect,
                        questionId: prismaQuestion.id,
                    }
                })
            } else {
                // @ts-ignore
                await prisma.answer.create({
                    data: {
                        text: answer.text,
                        isCorrect: answer.isCorrect,
                        questionId: prismaQuestion.id,
                    }
                })
            }
        })
    })

    return NextResponse.json({})
}

export async function DELETE(req: Request) {
    const splitUrl = req.url.split('/')
    const id = splitUrl[splitUrl.length - 2]

    // @ts-ignore
    await prisma.quiz.delete({
        where: {
            id
        }
    })

    return NextResponse.json({})
}