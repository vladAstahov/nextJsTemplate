"use client"

import { adminModel } from "../../model"
import { LoginForm } from "@/shared/ui/LoginForm"
import { useCallback } from "react"

export const AuthAdmin = () => {
    const { onLogin, isLoading } = adminModel.loginModel.useLogin()

    const onSubmit = useCallback(async (params: { login: string, password: string }) => {
        try {
            const { isExist } = await onLogin(params)
            if (isExist) {
                console.log('success')
            } else {
                console.log('denied')
            }
        } catch (e) {
            console.log(e)
        }
    }, [])

    return <LoginForm isLoading={isLoading} onSubmit={onSubmit} />
}