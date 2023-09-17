"use client";

import { quizesModel } from "@/entities/quiz/model"
import { PropsDefault } from "@/shared/types/helpers"
import { IconBase } from "@/shared/ui/IconBase"
import { RadioToggle } from "@/shared/ui/RadioToggle"
import React from "react"
import styles from './QuizesList.module.scss'
import { Quiz } from "@/entities/quiz/model/types"
import { Card } from "@/shared/ui/Card";
import { useRouter } from "next/navigation";
import { ListLayout } from "@/shared/ui/ListLayout";

export const QuizesList = () => {
    const { push } = useRouter()

    const { pool, isLoading } = quizesModel.useQuizes()

    return <ListLayout title="Квизы" onPress={() => push('/admin/add')}>
        {!isLoading && (
            <>
                {Object.values(pool).map(quiz => <QuizRow {...quiz} />)}
            </>
        )}
    </ListLayout>
}

const QuizRow = React.memo<PropsDefault & Quiz>(({ id, name, active }) => {
    return <Card className={styles.card} href={`/admin/quiz/${id}`}>
        <p>{name}</p>
        <div className={styles.inner}>
            <RadioToggle isActive={active} onPress={() => { }}>Активен</RadioToggle>
            <IconBase name="chevron-right" />
        </div>
    </Card>
})