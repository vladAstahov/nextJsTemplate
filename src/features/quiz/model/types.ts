export type Question = {
    id: string,
    text: string
    image?: string
}

export type Answer = {
    id: string,
    questionId: Question['id']
    text: string
    isCorrect: boolean
}