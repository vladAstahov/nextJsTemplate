import { createGate, useGate, useStore } from 'effector-react'
import { Promo } from './types'
import { createEffect, createStore, sample } from 'effector'
import { promoApi } from '@/shared/api'
import { activeModel } from './active'

const $promoList = createStore<Promo[]>([])

const getPromoListFx = createEffect(promoApi.getList)
$promoList.on(getPromoListFx.doneData, (_, { data }) => data)

const promoListGate = createGate()

sample({
    clock: promoListGate.open,
    target: getPromoListFx
})

const useGetPromoList = () => {
    useGate(promoListGate)

    return {
        isLoading: useStore(getPromoListFx.pending),
        list: useStore($promoList)
    }
}

export const promoModel = {
    useGetPromoList,
    activeModel
}