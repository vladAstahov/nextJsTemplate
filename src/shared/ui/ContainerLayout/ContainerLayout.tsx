import React from "react";
import { PropsDefault } from "@/shared/types/helpers";
import styles from './ContainerLayout.module.scss'

export type ContainerLayoutProps = PropsDefault & React.PropsWithChildren & {
    title: string
}

export const ContainerLayout = React.memo<ContainerLayoutProps>(({ className, children, title }) => {
    return <div className={`${styles.root} ${className}`}>
        <h1 className={styles.title}>{title}</h1>
        {children}
    </div>
})