import { createEffect, createEvent, forward } from "effector"
import { adminApi } from "../api"
import { useStore, useUnit } from "effector-react"

const loginFx = createEffect(adminApi.login)

const useLogin = () => {
    const onLogin = useUnit(loginFx)
    const isLoading = useStore(loginFx.pending)

    return {
        onLogin,
        isLoading
    }
}

export const loginModel = {
    useLogin
}