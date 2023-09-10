"use client";

import { PropsDefault } from '@/shared/types/helpers';
import React from 'react'
import styles from './RadioToggle.module.scss'

export type RadioToggleProps = PropsDefault & React.PropsWithChildren & {
    isActive: boolean,
    onPress: (value: boolean) => void
}

export const RadioToggle = React.memo<RadioToggleProps>(({ isActive, onPress, className, children }) => {
    return <div className={styles.root} onClick={() => onPress(!isActive)}>
        <span className={`${styles.span} ${isActive && styles['is-active']}`} />
        <p>{children}</p>
    </div>
})