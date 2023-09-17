import { quizesModel } from "@/entities/quiz/model"
import { Quiz } from "@/entities/quiz/model/types"
import { PropsDefault } from "@/shared/types/helpers"
import { Select } from "@/shared/ui/Select"
import React, { useMemo } from "react"

export type QuizSelectProps = PropsDefault & {
    value: NonNullable<Quiz['id']>
    onChange: (value: NonNullable<Quiz['id']>) => void
}

export const QuizSelect = React.memo<QuizSelectProps>(({ value, onChange, className }) => {
    const { pool } = quizesModel.useQuizes()

    const options = useMemo(() => Object.values(pool).map(quiz => ({
        id: quiz.id!,
        text: quiz.name
    })), [pool])

    return <Select className={className} value={value} onChange={onChange} options={[
        {
            id: '',
            text: 'Не выбран'
        },
        ...options
    ]} />
})