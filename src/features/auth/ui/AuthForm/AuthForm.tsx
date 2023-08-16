"use client"

import { Button } from "@/shared/ui/Button"
import { Input } from "@/shared/ui/Input"
import { useMemo, useState } from "react"
import styles from './AuthForm.module.scss'
import { useRouter } from "next/navigation"

export const AuthForm = () => {
    const { push } = useRouter()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const isValid = useMemo(() => login.length && password.length, [login, password])

    return <div className={styles.authForm}>
        <h1 className={styles.title}>Авторизация</h1>
        <Input
            className={styles.field}
            label="Логин"
            placeholder="Логин"
            value={login}
            setValue={setLogin}
        />
        <Input
            className={styles.field}
            label="Пароль"
            placeholder="Пароль"
            type="password"
            value={password}
            setValue={setPassword}
        />
        <Button
            className={styles.button}
            ariaLabel="Отправить"
            isDisabled={!isValid}
            onPress={() => push('/quiz/1')}>
            Войти
        </Button>
    </div>
}