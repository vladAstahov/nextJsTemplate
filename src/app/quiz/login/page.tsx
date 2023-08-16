import { AuthForm } from "@/features/auth/ui"
import React from "react"
import styles from './page.module.scss'

export default function QuizLogin() {
    return <main className={styles.main}>
        <AuthForm />
    </main>
}