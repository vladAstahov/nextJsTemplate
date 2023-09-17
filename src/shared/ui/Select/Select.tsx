import { PropsDefault } from "@/shared/types/helpers";
import React from "react";
import styles from './Select.module.scss'

export type SelectProps = PropsDefault & {
    value: string
    options: {
        id: string,
        text: string
    }[]
    onChange: (value: string) => void
}

export const Select = React.memo<SelectProps>(({ value, options, onChange, className }) => {
    return <select className={`${styles.root} ${className}`} value={value} onChange={e => onChange(e.target.value)}>
        {options.map(({ id, text }, index) => (
            <option value={id} key={index}>{text}</option>
        ))}
    </select>
})