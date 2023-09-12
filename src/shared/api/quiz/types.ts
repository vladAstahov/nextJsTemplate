import { Quiz } from "@prisma/client"

export type ResponseQuiz = {
    id: string
    name: string
    active: boolean
    link: string
    usersLimit: number
    started: boolean
}

export type ResponseQuestion = {
    id: string
    quizId: string
    text: string
    image: string
    index: number
}

export type ResponseAnswer = {
    id: string
    questionId: string
    text: string
    isCorrect: boolean
}

export type ApiParams = {
    quiz: {
        id?: string
        name: string,
        active: boolean,
        link: string,
        usersLimit: number
    },
    questions: {
        id: string
        text: string
        image?: string
    }[],
    answers: {
        id?: string
        questionId: string
        text: string
        isCorrect: boolean
    }[]
}

export type QuizApi = {
    createQuiz: (params: ApiParams) => Promise<void>
    getQuizes: () => Promise<{
        data: ResponseQuiz[]
    }>
    getQuiz: (params: string) => Promise<{
        quiz: ResponseQuiz,
        questions: ResponseQuestion[]
        answers: Record<ResponseAnswer['questionId'], ResponseAnswer[]>
    }>
    updateQuiz: (params: ApiParams) => Promise<void>
    deleteQuiz: (id: Quiz['id']) => Promise<void>
}