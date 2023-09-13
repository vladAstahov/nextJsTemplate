import { createGate, useGate, useStore } from 'effector-react'
import { Promo } from './types'
import { createEffect, createStore, sample } from 'effector'
import { promoApi } from '@/shared/api'

const $promoList = createStore<Promo[]>([])

const getPromoListFx = createEffect(promoApi.getList)
$promoList.on(getPromoListFx.doneData, (_, { data }) => data)

const promoListGate = createGate()

sample({
    source: {
        list: $promoList
    },
    clock: promoListGate.open,
    filter: ({ list }) => !Boolean(list.length),
    target: getPromoListFx
})

const useGetPromoList = () => {
    useGate(promoListGate)

    return {
        isLoading: useStore(getPromoListFx.pending)
    }
}

const usePromoList = () => ({
    list: useStore($promoList)
})