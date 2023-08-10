import styles from './page.module.scss'
import { ClientWithFetch, NewQuiz, Sheme, WinnerRules } from "@/widgets/main";

export default function Home() {
    return (
        <main className={styles.main}>
            <NewQuiz />
            <Sheme />
            <WinnerRules />
        </main>
    )
}
