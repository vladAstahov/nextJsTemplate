"use client";

import React, {useEffect} from "react";
import styles from "@/features/quiz/ui/QuizForm/QuizForm.module.scss";
import {Button} from "@/shared/ui/Button";
import {quizesModel} from "@/entities/quiz/model";
import {useRouter} from "next/navigation";

export const CreateQuizButton = () => {
    const { create, isLoading, isCreated, reset } = quizesModel.activeModel.useCreate()

    const { replace } = useRouter()

    useEffect(() => {
        console.log(isCreated)
        if (isCreated) {
            replace('/admin/list')
            reset()
        }
    }, [isCreated, replace])

    return <Button
        className={styles.button}
        ariaLabel="Сохранить"
        isBold={true}
        isDisabled={isLoading}
        onPress={create}>
        Сохранить
    </Button>
}