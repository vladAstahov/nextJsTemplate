import React from 'react'
import { PropsDefault } from "@/shared/types/helpers";
import { IconBase } from '@/shared/ui/IconBase';
import styles from './InfoCard.module.scss'

export type InfoCardProps = PropsDefault & {
    title: string,
    description: string,
    index: number,
    isIcon?: boolean
}

export const InfoCard = React.memo<InfoCardProps>(
    ({ title, description, index, className, isIcon = true }) => (
        <div className={className}>
            <div className={styles.header}>
                <div className={styles.wrapper}>
                    <span className={styles.index}>0{index}</span>
                </div>
                {isIcon && (
                    <IconBase className={styles.icon} name="chevron-right" />
                )}
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    ))