"use client";
import Link from 'next/link';
import styles from './Header.module.scss'
import {IconBase} from "@/shared/ui/IconBase";

export const Header = () => {
    return <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.main}>
                <span className={styles.logo}>LOGO NAME</span>
                <p className={styles.description}>Краткое описание чем занмиаемся</p>
            </div>
            <div className={styles.menu}>
                <Link className={styles.link} href={'/'}>Правила</Link>
                <Link className={styles.link} href={'/'}>Обратная связь</Link>
                <Link className={styles.link} href={'/'}>Список квизов</Link>
            </div>
        </div>
    </header>
}