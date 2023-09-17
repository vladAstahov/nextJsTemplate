"use client";

import React, { useMemo } from "react"
import { quizesModel } from "@/entities/quiz/model"
import { useState } from "react"
import { Input } from "@/shared/ui/Input"
import { RadioToggle } from "@/shared/ui/RadioToggle"
import styles from './QuizAnswers.module.scss'
import { Answer } from "@/entities/quiz/model/types";
import { Select, SelectProps } from "@/shared/ui/Select";

export const QuizAnswers = () => {
    const { answers } = quizesModel.activeModel.useAnswers()
    const { questions } = quizesModel.activeModel.useQuestions()

    const [active, setActive] = useState(questions[0].id)

    const questionIndex = useMemo(() => questions.findIndex(item => item.id === active), [questions, active])

    const selectOptions = useMemo<SelectProps['options']>(() => questions.map((question, index) => ({
        id: question.id,
        text: `Вопрос №${index + 1}`
    })), [])

    return (
        <div>
            <div className={styles.header}>
                <p>Создание ответа на вопрос:</p>
                <Select value={active} options={selectOptions} onChange={setActive} />
            </div>
            <div>
                {answers[active].map((answer, index) => (
                    <AnswerRow answer={answer} questionIndex={questionIndex} />
                ))}
            </div>
        </div>
    )
}

const AnswerRow = React.memo<{
    answer: Answer,
    questionIndex: number
}>(({ answer, questionIndex }) => {
    const { update } = quizesModel.activeModel.useAnswers()

    return <div className={styles.row}>
        <Input
            value={answer.text}
            placeholder={`Текст ответа на вопрос №${questionIndex}`}
            setValue={newValue => update({
                ...answer,
                text: newValue
            })} />
        <RadioToggle isActive={answer.isCorrect} onPress={() => update({
            ...answer,
            isCorrect: !answer.isCorrect
        })}>Верный ответ</RadioToggle>
    </div>
})