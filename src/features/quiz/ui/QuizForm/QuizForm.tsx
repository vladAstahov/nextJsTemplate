"use client";

import React, { ReactNode } from "react";
import { quizesModel } from "@/entities/quiz/model";
import { Input } from "@/shared/ui/Input";
import { RadioToggle } from "@/shared/ui/RadioToggle";
import { Divider } from "@/shared/ui/Divider";
import styles from './QuizForm.module.scss'

export type AddQuizFormProps = {
    questions: ReactNode
    answers: ReactNode
    submitButton: ReactNode
}

export const QuizForm = React.memo<AddQuizFormProps>(({ questions, answers, submitButton }) => {
    const { quiz, update } = quizesModel.activeModel.useQuiz()

    return <div className={styles.root}>
        <Input
            label="Название квиза"
            placeholder="Тескт поля"
            value={quiz.name}
            setValue={newValue => update({
                name: newValue
            })}
        />
        <Divider className={styles.divider} />
        <QuizActiveToggle />
        <Divider className={styles.divider} />
        {questions}
        <Divider className={styles.divider} />
        {answers}
        <Divider className={styles.divider} />
        <Input
            label="Создание закрытой ссылки"
            placeholder="Создание закрытой ссылки"
            value={quiz.link}
            setValue={newValue => update({
                link: newValue
            })}
        />
        <Divider className={styles.divider} />
        <Input
            type="number"
            label="Указание лимита регистраций"
            placeholder="Указание лимита регистраций"
            value={String(quiz.limit)}
            setValue={newValue => update({
                limit: Number(newValue)
            })}
        />
        <Divider className={styles.divider} />
        {submitButton}
    </div>
})

const QuizActiveToggle = () => {
    const { quiz, update } = quizesModel.activeModel.useQuiz()

    return <div>
        <label className={styles['toggle-label']}>Активность</label>
        <div className={styles['toggle-row']}>
            <RadioToggle
                isActive={quiz.active}
                onPress={() => update({ active: true })}>
                Да
            </RadioToggle>
            <RadioToggle isActive={!quiz.active} onPress={() => update({ active: false })}>
                Нет
            </RadioToggle>
        </div>
    </div>
}