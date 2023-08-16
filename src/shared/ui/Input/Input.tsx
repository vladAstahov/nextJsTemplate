import React from "react"
import { PropsDefault } from "@/shared/types/helpers"
import { HTMLInputTypeAttribute, useMemo } from "react"
import styles from './Input.module.scss'

export type InputProps = PropsDefault & {
    label?: string
    value: string
    setValue: (value: string) => void
    placeholder: string
    error?: boolean
    type?: HTMLInputTypeAttribute
}

export const Input = React.memo<InputProps>(({ value, setValue, placeholder, error, type, label, className }) => {
    const classes = useMemo(() => [
        styles.input,
        (error && styles.error)
    ].join(' '), [])

    return <div className={className}>
        {label && (
            <label className={styles.label}>{label}</label>
        )}
        <input
            className={classes}
            value={value}
            onChange={({ nativeEvent }) => {
                // @ts-ignore
                setValue(nativeEvent.target?.value)
            }}
            placeholder={placeholder} type={type} />
    </div>
})