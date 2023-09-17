"use client";

import Link from 'next/link';
import styles from './Header.module.scss'
import { usePathname } from 'next/navigation';

const isAdminRoute = (pathname: string) => pathname.includes('admin')

export const Header = () => {
    const pathname = usePathname()

    return <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.main}>
                <span className={styles.logo}>LOGO NAME</span>
                <p className={styles.description}>Краткое описание чем занимаемся</p>
            </div>
            {isAdminRoute(pathname)
                ? (
                    <div className={`${styles.menu} ${styles['admin-menu']}`}>
                        <Link className={styles.link} href={'/admin/main'}>Главная</Link>
                        <Link className={styles.link} href={'/admin/list'}>Квизы</Link>
                        <Link className={styles.link} href={'/admin/promo'}>Промокоды</Link>
                    </div>)
                : (

                    <div className={styles.menu}>
                        <Link className={styles.link} href={'/'}>Правила</Link>
                        <Link className={styles.link} href={'/'}>Обратная связь</Link>
                    </div>
                )}
        </div>
    </header>
}