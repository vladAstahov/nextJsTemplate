import React, { useMemo } from 'react';
import { PropsDefault } from "@/shared/types/helpers"
import styles from './ProgressBar.module.scss'

export type ProgressBarProps = PropsDefault & {
    filled: number
    all: number
}

export const ProgressBar = React.memo<ProgressBarProps>(({ filled, all, className }) => {
    const unfilledPercent = useMemo(() => {
        return (1 - filled / 100 * all) * 100
    }, [filled, all])

    return <div className={`${styles['progress-bar']} ${className}`}>
        <div
            style={{
                transform: `translateX(-${unfilledPercent}%)`
            }}
            className={styles.bar} />
    </div>
}) 