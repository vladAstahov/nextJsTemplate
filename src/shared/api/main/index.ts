import { makeRequest } from "@/shared/lib/request/makeRequest";
import { MainApi } from "./types";

export const mainApi: MainApi = {
    getActiveQuiz: async () => makeRequest({
        url: '/api',
        method: 'GET'
    }),
    getAdminMain: async () => makeRequest({
        url: '/admin/main/api',
        method: 'GET'
    }),
    updateMain: async params => makeRequest({
        url: '/admin/main/api',
        method: 'PUT',
        body: params
    })
}