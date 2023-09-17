import { Promo } from "@/entities/promo/model/types"

export type PromoApi = {
    getList: () => Promise<{
        data: Promo[]
    }>,
    createPromo: (params: Promo) => Promise<void>,
    updatePromo: (params: Promo) => Promise<void>,
    deletePromo: (id: Promo['id']) => Promise<void>
    getPromo: (id: Promo['id']) => Promise<{
        promo: Promo
    }>
}