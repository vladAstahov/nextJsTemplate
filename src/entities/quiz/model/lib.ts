import { Answer, Question, type Quiz } from "./types";
import { ApiParams, ResponseQuestion, type ResponseQuiz } from "@/shared/api/quiz/types";

export const toDomain = (data: ResponseQuiz[]): Record<NonNullable<Quiz['id']>, Quiz> => data.reduce((prev, curr) => ({
    ...prev,
    [curr.id]: curr
}), {})

export const quizDataToDomain = (quiz: ResponseQuiz): Quiz => ({
    id: quiz.id,
    name: quiz.name,
    active: quiz.active,
    link: quiz.link,
    limit: quiz.usersLimit
})

export const questionsToDomain = (data: ResponseQuestion[]): Question[] => data.map(question => ({
    id: question.id,
    text: question.text,
    image: question.image
}))

export const toApi = (data: {
    quiz: Quiz,
    answers: Record<Answer['questionId'], Answer[]>,
    questions: Question[]
}): ApiParams => ({
    quiz: {
        id: data.quiz.id,
        name: data.quiz.name,
        active: data.quiz.active,
        link: data.quiz.link,
        usersLimit: data.quiz.limit
    },
    answers: Object.values(data.answers).reduce((prev, curr) => [...prev, ...curr], []),
    questions: data.questions
})