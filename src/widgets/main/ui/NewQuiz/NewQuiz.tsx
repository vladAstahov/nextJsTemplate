import React from "react";
import styles from './NewQuiz.module.scss'
import {InfoRow} from "@/shared/ui/InfoRow";

export const NewQuiz = React.memo<PropsDefault>(({ className }) => {
    return <section className={`${className}`}>
        <h1>Умничать выгодно</h1>
        <p>Главный приз и текст , что за приз</p>
        <div>
            <InfoRow icon={'placeholder'} text={'text'}/>
        </div>
    </section>
})