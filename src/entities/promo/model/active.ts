import { promoApi } from '@/shared/api'
import { Promo } from './types'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { createGate, useGate, useStore, useUnit } from 'effector-react'
import { useCallback } from 'react'

export const $activePromo = createStore<Promo>({
    quizId: '',
    name: '',
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
const getPromoFx = createEffect(promoApi.getPromo)
$activePromo.on(getPromoFx.doneData, (_, { promo }) => promo)

const getPromoGate = createGate<Promo['id']>()

sample({
    clock: getPromoGate.open,
    target: getPromoFx
})

const initCreatingGate = createGate()
$activePromo.reset(initCreatingGate.open)

const usePromo = () => ({
    promo: useStore($activePromo),
    fillPromo: useUnit(fillPromo)
})

const useCreatePromo = () => {
    const promo = useStore($activePromo)
    const create = useUnit(createPromoFx)

    const onCreate = useCallback(async () => {
        console.log(promo)
        await create(promo)
    }, [promo, create])

    return {
        onCreate,
        isLoading: useStore(createPromoFx.pending)
    }
}

const useUpdatePromo = () => {
    const promo = useStore($activePromo)
    const update = useUnit(updatePromoFx)

    const onUpdate = useCallback(async () => {
        await update(promo)
    }, [promo, update])

    return {
        onUpdate,
        isLoading: useStore(updatePromoFx.pending)
    }
}

const useDeletePromo = () => {
    const deletePromo = useUnit(deletePromoFx)
    const promo = useStore($activePromo)

    const onDelete = useCallback(async () => {
        await deletePromo(promo.id)
    }, [promo, deletePromo])

    return {
        onDelete,
        isLoading: useStore(deletePromoFx.pending)
    }
}

const useGetPromo = (id: Promo['id']) => {
    useGate(getPromoGate, id)

    return {
        isLoading: useStore(getPromoFx.pending)
    }
}

const useInitCreatePromo = () => {
    useGate(initCreatingGate)
}

export const activeModel = {
    usePromo,
    useCreatePromo,
    useUpdatePromo,
    useDeletePromo,
    useGetPromo,
    useInitCreatePromo
}