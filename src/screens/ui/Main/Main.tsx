import {NewQuiz, Sheme, WinnerRules} from "./sections";
import styles from './Main.module.scss'

export const Main = () => (
    <main className={styles.root}>
        <NewQuiz />
        <Sheme />
        <WinnerRules />
    </main>
)