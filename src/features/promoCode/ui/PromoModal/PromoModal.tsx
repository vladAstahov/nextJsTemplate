"use client";

import React, { useCallback, useMemo, useState } from "react"
import { Input, InputProps } from "@/shared/ui/Input"
import { Modal, ModalProps } from "@/shared/ui/Modal"
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/shared/ui/Button";
import styles from './PromoModal.module.scss'
import { PromoStatus } from "../../model/types";
import { Response, ResponseProps } from "@/shared/ui/Response";

export type PromoModalProps = ModalProps

type ValueType = {
    promo: string,
    email: string,
    login: string,
    password: string
}

const responseContent: Record<PromoStatus, ResponseProps> = {
    'ok': {
        view: 'success',
        icon: 'placeholder',
        text: 'Вы успешно зарегистрировались на игру. Ссылка на участие придет вам на указанный email'
    },
    'error': {
        view: 'critical',
        icon: 'placeholder',
        text: 'Промокод не действителен'
    },
    'activated': {
        view: 'warning',
        icon: 'placeholder',
        text: 'Промокод уже был активирован'
    }
}

export const PromoModal = React.memo<PromoModalProps>((props) => {
    const [value, setValue] = useState<ValueType>({
        promo: '',
        email: '',
        login: '',
        password: ''
    })
    const [isPassed, setIsPassed] = useState(true)
    const [isResponse, setIsResponse] = useState(false)
    const [status, setStatus] = useState<PromoStatus>('ok')

    const isValid = useMemo(
        () => {
            console.log(Object.values(value).every(elem => elem.length) && isPassed)
            return Object.values(value).every(elem => elem.length) && isPassed
        },
        [value, isPassed]
    )

    const onInput = useCallback((value: string, key: keyof ValueType) => {
        setValue(prevState => ({
            ...prevState,
            [key]: value
        }))
    }, [])

    return <Modal {...props} wrapperClassname={styles.wrapper}>
        <div className={`${styles.inner} ${!isResponse && styles['is-active']}`}>
            <h3 className={styles.title}>Промокод</h3>
            <Input
                className={styles.field}
                value={value.promo}
                label="Промокод"
                placeholder="Введите промокот"
                setValue={newValue => onInput(newValue, 'promo')}
            />
            <Input
                className={styles.field}
                value={value.email}
                label="E-mail"
                setValue={newValue => onInput(newValue, 'email')}
                placeholder="E-mail"
            />
            <Input
                className={styles.field}
                value={value.login}
                label="Логин"
                setValue={newValue => onInput(newValue, 'login')}
                placeholder="Логин"
            />
            <Input
                className={styles.field}
                value={value.password}
                label="Пароль"
                setValue={newValue => onInput(newValue, 'password')}
                placeholder="Пароль"
                type="password"
            />
            <ReCAPTCHA
                className={styles.recaptcha}
                sitekey="6LfXWbAnAAAAAGBSPyxysXM843cf7tZuH_O6oKPz"
                onChange={() => setIsPassed(true)} />
            <Button
                className={styles.button}
                ariaLabel="Отправить"
                isDisabled={!isValid}
                isBold={true}
                onPress={() => {
                    setStatus('ok')
                    setIsResponse(true)
                }}>
                Отправить
            </Button>
        </div>
        <Response
            className={`${styles.response} ${isResponse && styles['is-active']}`}
            {...responseContent[status]}
        />
    </Modal>
})