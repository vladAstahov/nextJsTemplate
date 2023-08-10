import {IconName} from "@/shared/types/helpers";
import React from "react";
import {IconBase} from "@/shared/ui/IconBase";
import styles from './InfoRow.module.scss'

export type InfoRowProps = PropsDefault & {
    icon: IconName,
    text: string
}

export const InfoRow = React.memo<InfoRowProps>(({ icon, text, className }) => {
    return <div className={`${styles.infoRow} ${className}`}>
        <IconBase name={icon} className={styles.icon}/>
        <p className={styles.text}>{text}</p>
    </div>
})