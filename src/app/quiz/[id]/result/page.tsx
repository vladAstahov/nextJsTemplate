import React from "react"
import styles from './page.module.scss'
import { Result } from "@/widgets/quiz/ui"

export default function ResultPage() {
    return <main className={styles.main}>
        <Result />
    </main>
}