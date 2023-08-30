"use client"

import { adminModel } from "../../model"
import { LoginForm } from "@/shared/ui/LoginForm"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

export const AuthAdmin = () => {
    const { replace } = useRouter()
    const { onLogin, isLoading } = adminModel.loginModel.useLogin()

    const onSubmit = useCallback(async (params: { login: string, password: string }) => {
        try {
            const { isExist } = await onLogin(params)
            if (isExist) {
                replace('/admin/main')
            }
        } catch (e) {
            console.log(e)
        }
    }, [])

    return <LoginForm isLoading={isLoading} onSubmit={onSubmit} />
}