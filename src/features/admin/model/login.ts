import { createEffect, createEvent, forward, sample } from "effector"
import { adminApi } from "../api"
import { useStore, useUnit } from "effector-react"
import { isAuthAdminModel } from "@/entities/admin/model"

const loginFx = createEffect(adminApi.login)

sample({
    clock: loginFx.doneData,
    filter: ({ isExist }) => isExist,
    target: isAuthAdminModel.authorizeFx
})

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