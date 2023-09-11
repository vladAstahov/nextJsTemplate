import { makeRequest } from "@/shared/lib/request/makeRequest";
import { QuizApi } from "./types";

export const quizApi: QuizApi = {
    createQuiz: params => makeRequest({
        url: '/admin/add/api',
        method: 'POST',
        body: params
    }),
    getQuizes: () => makeRequest({
        url: '/admin/list/api',
        method: 'GET'
    }),
    getQuiz: (id: string) => makeRequest({
        url: `/admin/quiz/${id}`,
        method: 'GET'
    })
}