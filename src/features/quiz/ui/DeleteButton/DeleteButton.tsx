"use client";

import React, { useCallback, useEffect } from "react";
import { Button } from "@/shared/ui/Button";
import { quizesModel } from "@/entities/quiz/model";
import { useRouter } from "next/navigation";
import styles from './DeleteButton.module.scss'

export const DeleteButton = () => {
    const { deleteQuiz } = quizesModel.activeModel.useDelete()
    const { quiz } = quizesModel.activeModel.useQuiz()
    const { replace } = useRouter()

    const onPress = useCallback(async () => {
        await deleteQuiz(quiz.id)
        replace('/admin/list')
    }, [])

    return <Button
        className={styles.root}
        ariaLabel="Удалить"
        isBold={true}
        onPress={onPress}>
        Удалить
    </Button>
}