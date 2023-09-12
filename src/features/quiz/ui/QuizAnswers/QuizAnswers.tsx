"use client";

import React, { useEffect, useMemo } from "react"
import { quizesModel } from "@/entities/quiz/model"
import { useState } from "react"
import { Input } from "@/shared/ui/Input"
import { RadioToggle } from "@/shared/ui/RadioToggle"
import styles from './QuizAnswers.module.scss'
import { Answer } from "@/entities/quiz/model/types";

export const QuizAnswers = () => {
    const { answers } = quizesModel.activeModel.useAnswers()
    const { questions } = quizesModel.activeModel.useQuestions()

    const [active, setActive] = useState(questions[0].id)

    const questionIndex = useMemo(() => questions.findIndex(item => item.id === active), [questions, active])

    useEffect(() => {
        console.log(active)
        console.log(answers)
    }, [active, answers])

    return (
        <div>
            <div className={styles.header}>
                <p>Создание ответа на вопрос:</p>
                <select className={styles.select} value={active} onChange={e => setActive(e.target.value)}>
                    {questions.map((question, index) => (
                        <option value={question.id}>Вопрос №{index}</option>
                    ))}
                </select>
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