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
}