export type MainApi = {
    getActiveQuiz: () => Promise<{
        quiz: {
            name: string
            link: string
            date: string
            time: string
            price: string
            limit: string
        }
    }>
}