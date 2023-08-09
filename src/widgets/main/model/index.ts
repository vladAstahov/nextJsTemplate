import {mainApi} from "@/widgets/main/api";
import {createEvent, createStore, createEffect, sample} from "effector";
import {useStore, useUnit} from "effector-react";
import {useCallback} from "react";

export type Title = {
    id: number,
    title: string
}

type Titles = Title[]

const getTitleFx = createEffect(mainApi.getTitle)
const getTitlesFx = createEffect(mainApi.getTitles)
const addTitleFx = createEffect(mainApi.addTitle)

const setTitles = createEvent<Titles>()
const $titles = createStore<Titles>([])
    .on(setTitles, (_, payload) => payload)

sample({
    clock: getTitlesFx.doneData,
    fn: ({ titles }) => titles,
    target: setTitles
})

const useTitle = () => {
    const fetch = useUnit(getTitleFx)
    const isLoading = useStore(getTitleFx.pending)

    const onFetch = useCallback(async (id: string | number) => {
        try {
            return await fetch({
                id
            })
        } catch (e) {
            console.log(e)
        }
    }, [fetch])

    return {
        isLoading,
        onFetch
    }
}

const useTitles = () => {
    const fetch = useUnit(getTitlesFx)
    const isLoading = useStore(getTitlesFx.pending)
    const titles = useStore($titles)

    return {
        fetch,
        isLoading,
        titles
    }
}

const useAddTitle = () => {
    const addTitle = useUnit(addTitleFx)
    const isLoading = useStore(addTitleFx.pending)

    const onAdd = useCallback(async (title: string) => {
        try {
            await addTitle({
                title
            })
        } catch (e) {
            throw new Error(e as string)
        }
    }, [addTitle])

    return {
        onAdd, isLoading
    }
}

export const mainModel = {
    useTitle,
    useTitles,
    useAddTitle
}