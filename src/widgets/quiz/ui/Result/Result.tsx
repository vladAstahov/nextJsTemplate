"use client";

import { LazyLoadImage } from "react-lazy-load-image-component"
import styles from './Result.module.scss'

export const Result = () => {
    return <div className={styles.root}>
        <LazyLoadImage src="/images/decoration.svg" className={styles.image} />
        <p className={styles.text}>Спасибо за участие в игре! Вы набрали <span>100</span> баллов и заняли <span>10</span> место. Ждем вас в следующей игре, сообщим о ней по email!</p>
    </div>
}