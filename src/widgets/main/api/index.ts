import {makeRequest} from "@/shared/lib/request/makeRequest";

export type MainApi = {
    getTitle: (params: {
        id: string | number
    }) => Promise<{
        title: {
            id: number,
            title: string
        }
    }>,
    getTitles: () => Promise<{
        titles: {
            id: string,
            title: string
        }[]
    }>
    addTitle: (params: {
        title: string
    }) => Promise<{
        void
    }>
}

export const mainApi: MainApi = {
    getTitle: ({ id }) => makeRequest<{
        title: {
            id: number,
            title: string
        }
    }>({
        url: `/api/${id}`,
        method: 'GET'
    }),
    getTitles: () => makeRequest({
        url: '/api/titles',
        method: 'GET'
    }),
    addTitle: ({ title }) => makeRequest({
        url: '/api/titles',
        method: 'POST',
        body: {
            title: title
        }
    })
}