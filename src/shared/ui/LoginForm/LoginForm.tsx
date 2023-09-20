"use client";

import React, { useCallback, useMemo, useState } from "react"
import styles from './LoginForm.module.scss'
import { Input } from '../Input'
import { Button } from '../Button'

export type LoginFormProps = {
    isLoading?: boolean
    onSubmit: (params: { login: string, password: string }) => void
}

export const LoginForm = React.memo<LoginFormProps>(({ isLoading, onSubmit }) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const isValid = useMemo(() => login.length && password.length, [login, password])
    const onPress = useCallback(() => {
        onSubmit({ login, password })
    }, [login, password])

    return <div className={styles.root}>
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
            isDisabled={!isValid || isLoading}
            onPress={onPress}>
            Войти
        </Button>
    </div>
})