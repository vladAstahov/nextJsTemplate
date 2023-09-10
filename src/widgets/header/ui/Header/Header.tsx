"use client";

import Link from 'next/link';
import styles from './Header.module.scss'
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/shared/ui/Button';

const isAdminRoute = (pathname: string) => pathname.includes('admin')
const isAddRoute = (pathname: string) => pathname.includes('add')

export const Header = () => {
    const pathname = usePathname()
    const { push } = useRouter()

    return <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.main}>
                <span className={styles.logo}>LOGO NAME</span>
                <p className={styles.description}>Краткое описание чем занимаемся</p>
            </div>
            <div className={styles.menu}>
                {isAdminRoute(pathname)
                    ? (
                        <>
                            <Link className={styles.link} href={'/admin/main'}>Главная</Link>
                            <Link className={styles.link} href={'/admin/list'}>Квизы</Link>
                        </>)
                    : (
                        <>
                            <Link className={styles.link} href={'/'}>Правила</Link>
                            <Link className={styles.link} href={'/'}>Обратная связь</Link>
                        </>
                    )}
            </div>
            {isAdminRoute(pathname) && !isAddRoute(pathname) && (
                <Button ariaLabel='Добавить' onPress={() => push('/admin/add')}>Добавить</Button>
            )}
        </div>
    </header>
}