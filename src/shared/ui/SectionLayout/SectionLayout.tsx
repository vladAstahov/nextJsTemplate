import React from 'react'
import { PropsDefault } from "@/shared/types/helpers";
import styles from './SectionLayout.module.scss'

export type SectioLayoutProps = PropsDefault & React.PropsWithChildren & {
    containerClassname?: string
}

export const SectioLayout = React.memo<SectioLayoutProps>(({ className, containerClassname, children }) => (
    <section className={className}>
        <div className={`${styles.container} ${containerClassname}`}>
            {children}
        </div>
    </section>
))