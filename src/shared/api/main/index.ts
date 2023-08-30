import { makeRequest } from "@/shared/lib/request/makeRequest";
import { MainApi } from "./types";

export const mainApi: MainApi = {
    getActiveQuiz: async () => makeRequest({
        url: '/api',
        method: 'GET'
    })
}