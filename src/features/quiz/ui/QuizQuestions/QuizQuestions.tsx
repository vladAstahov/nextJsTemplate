"use client";

import React, { useCallback } from "react"
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { quizesModel } from '@/entities/quiz/model'
import { Input } from "@/shared/ui/Input";
import { Question } from "@/features/quiz/model/types";
import { IconBase } from "@/shared/ui/IconBase";
import styles from './QuizQuestions.module.scss'
import { Button } from "@/shared/ui/Button";

export const QuizQuestions = () => {
    const { questions, add, reorder } = quizesModel.activeModel.useQuestions()

    const onDragEnd = useCallback((result: DropResult) => {
        if (result.destination) {
            reorder({
                startIndex: result.source.index,
                endIndex: result.destination.index
            })
        }
    }, [])

    return <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {questions.map((item, index) => (
                        <QuestionRow key={index} question={item} index={index} />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
        <Button className={styles.button} view="secondary" isBold ariaLabel="Добавить" onPress={add}>Добавить вопрос</Button>
    </DragDropContext>
}

const QuestionRow = React.memo<{
    question: Question
    index: number
}>(({ question, index }) => {
    const { update } = quizesModel.activeModel.useQuestions()

    return (
        <Draggable draggableId={question.id} index={index}>
            {(provided) => (
                <div
                    className={styles.question}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className={styles.row}>
                        <span className={styles.index}>№{index}</span>
                        <Input className={styles.input} value={question.text} placeholder="Текст вопроса в поле" setValue={newValue => update({
                            id: question.id,
                            text: newValue
                        })} />
                        <IconBase className={styles.icon} name="placeholder" />
                    </div>
                </div>
            )}
        </Draggable>
    )
})