import { Main } from "@/entities/main/model/types"

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
    }>,
    getAdminMain: () => Promise<Main>,
    updateMain: (params: Main) => Promise<void>
}