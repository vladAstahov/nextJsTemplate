import React from 'react'
import { PropsDefault } from "@/shared/types/helpers";
import { SectioLayout } from '@/shared/ui/SectionLayout';
import { InfoCard } from '@/shared/ui/InfoCard';
import styles from './InfoSectionLayout.module.scss'

export type InfoSectionLayoutProps = PropsDefault & {
    title: string,
    data: {
        title: string,
        description: string
    }[]
}

export const InfoSectionLayout = React.memo<InfoSectionLayoutProps>(
    ({ title, data, className }) => (
        <SectioLayout className={className}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.wrapper}>
                {data.map((element, index) => (
                    <InfoCard
                        className={styles.card}
                        key={index}
                        index={index + 1}
                        {...element}
                        isIcon={index !== data.length - 1}
                    />
                ))}
            </div>
        </SectioLayout>
    ))