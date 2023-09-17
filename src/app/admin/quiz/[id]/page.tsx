"use client";

import { Header } from "@/widgets/header"
import { DeleteButton, QuizAnswers, QuizForm, QuizQuestions, UpdateQuizButton } from "@/features/quiz/ui";
import { useParams } from "next/navigation";
import { quizesModel } from "@/entities/quiz/model";
import { ContainerLayout } from "@/shared/ui/ContainerLayout";

export default function QuizPage() {
    const params = useParams()
    const { isLoading } = quizesModel.activeModel.useGetQuiz(params.id!)

    return <>
        <Header />
        {!isLoading && (
            <ContainerLayout title="Редактирование квиза">
                <QuizForm
                    questions={<QuizQuestions />}
                    answers={<QuizAnswers />}
                    submitButton={<UpdateQuizButton />}
                />
                <DeleteButton />
            </ContainerLayout>
        )}
    </>
}