import { mainApi } from "@/shared/api";
import { ActiveQuiz } from "@/widgets/main/model/types";
import { createEffect, createEvent, createStore, forward, sample } from "effector";
import { createGate, useGate, useStore } from "effector-react";

const getActiveQuizFx = createEffect(mainApi.getActiveQuiz)

const updatedActiveQuiz = createEvent<ActiveQuiz>()

const activeQuizGate = createGate()
const $activeQuiz = createStore<ActiveQuiz | null>(null)
    .on(updatedActiveQuiz, (_, payload) => payload)

sample({
    clock: activeQuizGate.open,
    target: getActiveQuizFx
})

sample({
    clock: getActiveQuizFx.doneData,
    fn: ({ quiz }) => quiz,
    target: updatedActiveQuiz
})

const useMain = () => {
    const isLoading = useStore(getActiveQuizFx.pending)
    const activeQuiz = useStore($activeQuiz)

    useGate(activeQuizGate)

    return {
        isLoading,
        activeQuiz
    }
}

export const mainModel = {
    useMain
}