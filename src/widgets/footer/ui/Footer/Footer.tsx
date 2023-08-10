"use client"

import { useDevice } from "@/shared/lib/utils/useDevice"
import { IconBase } from "@/shared/ui/IconBase"
import styles from './Footer.module.scss'

export const Footer = () => {
    const { device } = useDevice()

    return <footer className={styles.root}>
        <div className={styles.container}>
            <span className={styles.privacy}>Все права защищены. 2023</span>
            <a className={styles.telegram} href="https://t.me/astahovVlad" rel="nofollow noreferrer" target="_blank">
                {device.desktop && (
                    <span>@user_name</span>
                )}
                <IconBase className={styles.icon} name="placeholder" />
            </a>
        </div>
    </footer>
}