export type ResponseQuiz = {
    id: string
    name: string
    active: boolean
    link: string
    usersLimit: number
    started: boolean
}

export type QuizApi = {
    createQuiz: (params: {
        quiz: {
            name: string,
            active: boolean,
            link: string,
            usersLimit: null
        },
        questions: {
            id: string
            text: string
            image?: string
        }[],
        answers: {
            questionId: string
            text: string
            isCorrect: boolean
        }[]
    }) => Promise<void>
    getQuizes: () => Promise<{
        data: ResponseQuiz[]
    }>
    getQuiz: (id: string) => Promise<{
        quiz: {
            id: string
            name: string
            active: boolean
            link: string
            usersLimit: number
            started: boolean
        },
        questions: {
            id: string
            quizId: string
            text: string
            image: string
            index: number
        }[]
        answers: {
            id: string
            questionId: string
            text: string
            isCorrect: boolean
        }[]
    }>
}