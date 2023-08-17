import React from "react"
import styles from './page.module.scss'
import { Questions } from "@/widgets/quiz/ui"

export default function Quiz() {
    return <main className={styles.main}>
        <Questions />
    </main>
}