import React from "react"
import { mainModel } from "@/entities/main/model"
import { PropsDefault } from "@/shared/types/helpers"
import { Input } from "@/shared/ui/Input"
import { Main } from "@/entities/main/model/types"
import { QuizSelect } from "@/entities/quiz"
import styles from './UpdateMainForm.module.scss'

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

    return <div>
        {Object.keys(main).map(key => (
            <>
                {key !== 'quizId' && key !== 'id' && (
                    <Input
                        className={styles.field}
                        value={String(main[key as keyof Main])}
                        placeholder={placeholders[key as keyof Omit<Main, 'id'>]}
                        setValue={newValue => update({
                            [key]: newValue
                        })} />
                )}
                {key === 'quizId' && (
                    <QuizSelect
                        className={styles.field}
                        value={main.quizId}
                        onChange={newValue => update({
                            quizId: newValue
                        })} />
                )}
            </>
        ))}
    </div >
})