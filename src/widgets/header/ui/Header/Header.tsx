import Link from 'next/link';
import styles from './Header.module.scss'

export const Header = () => {
    return <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.main}>
                <span className={styles.logo}>LOGO NAME</span>
                <p className={styles.description}>Краткое описание чем занимаемся</p>
            </div>
            <div className={styles.menu}>
                <Link className={styles.link} href={'/'}>Правила</Link>
                <Link className={styles.link} href={'/'}>Обратная связь</Link>
            </div>
        </div>
    </header>
}