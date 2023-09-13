import { PromoApi } from "@/shared/api/promo/types";
import { makeRequest } from "@/shared/lib/request/makeRequest";

export const promoApi: PromoApi = {
    getList: async () => makeRequest({
        url: '/admin/promo/api',
        method: 'GET'
    }),
    createPromo: async params => makeRequest({
        url: '/admin/promo/api',
        method: 'POST',
        body: params
    }),
    updatePromo: async params => makeRequest({
        url: `/admin/promo/${params.id}/api`,
        method: 'PUT',
        body: params
    }),
    deletePromo: async id => makeRequest({
        url: `/admin/promo/${id}/api`,
        method: 'DELETE',
    })
}