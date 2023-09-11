"use client";

import { quizesModel } from "@/entities/quiz/model"
import { PropsDefault } from "@/shared/types/helpers"
import { IconBase } from "@/shared/ui/IconBase"
import { RadioToggle } from "@/shared/ui/RadioToggle"
import Link from "next/link"
import React from "react"
import styles from './QuizesList.module.scss'
import { Quiz } from "@/entities/quiz/model/types"

export const QuizesList = () => {
    const { pool, isLoading } = quizesModel.useQuizes()

    return <div className={styles.root}>
        {!isLoading && (
            <>
                {Object.values(pool).map(quiz => <QuizRow {...quiz} />)}
            </>
        )}
    </div>
}

const QuizRow = React.memo<PropsDefault & Quiz>(({ id, name, active }) => {
    return <Link className={styles.card} href={`/admin/quiz/${id}`}>
        <p>{name}</p>
        <div className={styles.inner}>
            <RadioToggle isActive={active} onPress={() => { }}>Активен</RadioToggle>
            <IconBase name="chevron-right" />
        </div>
    </Link>
})