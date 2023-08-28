"use client"

import { useCallback } from "react"
import { useRouter } from "next/navigation"
import { LoginForm } from "@/shared/ui/LoginForm"

export const AuthForm = () => {
    const { push } = useRouter()

    const onSubmit = useCallback(() => {
        push('/quiz/1')
    }, [])

    return <LoginForm onSubmit={onSubmit} />
}