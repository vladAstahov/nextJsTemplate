import { AuthAdmin } from "@/features/admin/ui";
import styles from './page.module.scss'

export default function AdminLogin() {
    return (
        <main className={styles.main}>
            <AuthAdmin />
        </main>
    )
}