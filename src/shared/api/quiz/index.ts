import { makeRequest } from "@/shared/lib/request/makeRequest";
import { QuizApi } from "./types";

export const quizApi: QuizApi = {
    createQuiz: params => makeRequest({
        url: '/admin/add/api',
        method: 'POST',
        body: params
    })
}