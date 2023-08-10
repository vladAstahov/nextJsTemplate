import styles from './page.module.scss'
import {ClientWithFetch, NewQuiz} from "@/widgets/main";

export default function Home() {
    return (
        <main className={styles.main}>
            <NewQuiz/>
            <ClientWithFetch/>
        </main>
    )
}
