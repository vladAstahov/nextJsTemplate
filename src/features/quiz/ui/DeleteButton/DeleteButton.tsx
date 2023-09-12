"use client";

import React, { useCallback, useEffect } from "react";
import styles from "@/features/quiz/ui/QuizForm/QuizForm.module.scss";
import { Button } from "@/shared/ui/Button";
import { quizesModel } from "@/entities/quiz/model";
import { useRouter } from "next/navigation";

export const DeleteButton = () => {
    const { deleteQuiz } = quizesModel.activeModel.useDelete()
    const { quiz } = quizesModel.activeModel.useQuiz()
    const { replace } = useRouter()

    const onPress = useCallback(async () => {
        await deleteQuiz(quiz.id)
        replace('/admin/list')
    }, [])

    return <Button
        className={styles.button}
        ariaLabel="Удалить"
        isBold={true}
        onPress={onPress}>
        Удалить
    </Button>
}