import styles from './page.module.scss'
import {useEffect} from "react";
import {GET} from "@/app/api/[id]/route";
import {ClientWithFetch} from "@/widgets/main";

export default function Home() {
    return (
        <main className={styles.main}>
            <ClientWithFetch/>
        </main>
    )
}
