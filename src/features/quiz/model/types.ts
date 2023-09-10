export type Quiz = {
    name: string
    active: boolean
    link: string
    limit: number
}

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