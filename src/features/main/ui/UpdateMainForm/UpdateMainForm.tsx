import React from "react"
import { mainModel } from "@/entities/main/model"
import { PropsDefault } from "@/shared/types/helpers"
import { Input } from "@/shared/ui/Input"
import { Main } from "@/entities/main/model/types"
import { quizesModel } from "@/entities/quiz/model"

const placeholders: Record<keyof Omit<Main, 'id'>, string> = {
    title: 'Введите заголовок',
    description: "Введите описание",
    time: "Время начала",
    date: "Дата проведения",
    quizId: "Привязанный квиз",
    price: "Введите цену"
}

export const UpdateMainForm = React.memo<PropsDefault>(() => {
    const { main, update } = mainModel.useMain()
    const { pool } = quizesModel.useQuizes()

    return <div>
        {Object.keys(main).map(key => (
            <>
                {key !== 'quizId' && key !== 'id' && (
                    <Input
                        value={String(main[key as keyof Main])}
                        placeholder={placeholders[key as keyof Omit<Main, 'id'>]}
                        setValue={newValue => update({
                            [key]: newValue
                        })} />
                )}
                {key === 'quizId' && (
                    <select value={main.quizId} onChange={e => update({
                        quizId: e.target.value
                    })}>
                        {Object.values(pool).map(quiz => (
                            <option value={quiz.id!}>{quiz.name}</option>
                        ))}
                    </select>
                )}
            </>
        ))}
    </div >
})