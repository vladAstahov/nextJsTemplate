import React, { useMemo } from "react"
import { IconName, PropsDefault } from "@/shared/types/helpers"
import { IconBase } from "../IconBase"
import styles from './Response.module.scss'

export type ResponseProps = PropsDefault & {
    text: string,
    icon: IconName,
    view?: 'success' | 'warning' | 'critical'
}

export const Response = React.memo<ResponseProps>(
    ({
        text,
        icon,
        className,
        view = 'success'
    }) => {
        const classes = useMemo(() => [
            styles.response,
            styles[`response--view-${view}`],
            className
        ].join(' '), [view, className])

        return <div className={classes}>
            <IconBase className={styles.icon} name={icon} />
            <p className={styles.text}>{text}</p>
        </div>
    })