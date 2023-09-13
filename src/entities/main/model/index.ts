import { mainApi } from "@/shared/api";
import { Main } from "./types";
import { createEffect, createEvent, createStore, sample } from "effector";
import { createGate, useGate, useStore, useUnit } from "effector-react";

const $main = createStore<Main>({
    id: 1,
    title: '',
    description: '',
    time: '',
    date: '',
    quizId: '',
    price: ''
})

const updateMain = createEvent<Partial<Main>>()
$main.on(updateMain, (state, payload) => ({
    ...state,
    ...payload
}))

const getMainFx = createEffect(mainApi.getAdminMain)
$main.on(getMainFx.doneData, (_, payload) => payload)

const mainGate = createGate()
sample({
    clock: mainGate.open,
    target: getMainFx
})

const updateMainFx = createEffect(mainApi.updateMain)
const updateMainApi = createEvent()

sample({
    source: {
        data: $main
    },
    clock: updateMainApi,
    fn: ({ data }) => data,
    target: updateMainFx
})

const useGetMain = () => {
    useGate(mainGate)

    return {
        isLoading: useStore(getMainFx.pending)
    }
}

const useUpdateMain = () => ({
    update: useUnit(updateMainApi),
    isLoading: useStore(updateMainFx.pending)
})

const useMain = () => ({
    main: useStore($main),
    update: useUnit(updateMain)
})

export const mainModel = {
    useGetMain,
    useUpdateMain,
    useMain
}