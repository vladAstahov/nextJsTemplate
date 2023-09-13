import { promoApi } from '@/shared/api'
import { Promo } from './types'
import { createEffect, createEvent, createStore } from 'effector'

export const $activePromo = createStore<Promo>({
    quizId: '',
    limit: 0,
})

const fillPromo = createEvent<Partial<Promo>>()
$activePromo.on(fillPromo, (state, payload) => ({
    ...state,
    ...payload
}))

const createPromoFx = createEffect(promoApi.createPromo)
const updatePromoFx = createEffect(promoApi.updatePromo)
const deletePromoFx = createEffect(promoApi.deletePromo)