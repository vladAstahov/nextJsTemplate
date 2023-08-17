import { IconBase } from "@/shared/ui/IconBase"
import React, { useMemo } from "react"
import styles from './Radio.module.scss'
import { PropsDefault } from "@/shared/types/helpers"

export type RadioProps = PropsDefault & {
    isActive: boolean,
    isSuccess: boolean
    isError: boolean
    isDisabled: boolean
    onPress: (value: boolean) => void
} & React.PropsWithChildren

export const Radio = React.memo<RadioProps>(
    ({ isActive, isError, isSuccess, onPress, children, className, isDisabled }) => {
        const classes = useMemo(() => [
            styles.root,
            (isSuccess && styles['root--view-success']),
            (isError && styles['root--view-critical']),
            className
        ].join(' '), [isError, isSuccess])

        return <div className={classes} onClick={() => isDisabled ? {} : onPress(!isActive)}>
            <div className={styles.wrapper}>
                <span className={`${styles.radio} ${isActive && styles['is-active']}`} />
                <IconBase className={`${styles.icon} ${(isSuccess || isError) && styles['is-icon']}`} name="placeholder" />
            </div>
            <p>{children}</p>
        </div>
    })