import { PropsDefault } from "@/shared/types/helpers";
import Link from "next/link";
import React from "react";
import styles from './Card.module.scss'

export type CardProps = PropsDefault & React.PropsWithChildren & {
    href: string
}

export const Card = React.memo<CardProps>(({ className, children, href }) => {
    return <Link href={href} className={`${className} ${styles.root}`}>
        {children}
    </Link>
})