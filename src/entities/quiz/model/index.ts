import { createGate, useGate, useStore } from "effector-react";
import { toDomain } from "./lib";
import { Quiz } from "./types";
import { quizApi } from "@/shared/api";
import { createEffect, createStore, sample } from "effector";

import { activeModel } from './active'

const getListFx = createEffect(quizApi.getQuizes)

const quizesGate = createGate()
const $quizes = createStore<Record<NonNullable<Quiz['id']>, Quiz>>({})
    .on(getListFx.doneData, (_, { data }) => toDomain(data))

sample({
    clock: quizesGate.open,
    target: getListFx
})

const useQuizes = () => {
    useGate(quizesGate)

    return {
        pool: useStore($quizes),
        isLoading: useStore(getListFx.pending)
    }
}

export const quizesModel = {
    useQuizes,

    activeModel
}

