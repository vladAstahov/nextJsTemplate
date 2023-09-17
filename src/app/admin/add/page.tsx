"use client";

import { Header } from "@/widgets/header";
import { QuizForm, QuizAnswers, QuizQuestions, CreateQuizButton } from '@/features/quiz/ui'
import { quizesModel } from "@/entities/quiz/model";
import { ContainerLayout } from "@/shared/ui/ContainerLayout";

export default function QuizAdd() {
    quizesModel.activeModel.useInitQuizCreating()

    return <>
        <Header />
        <ContainerLayout title="Добавить квиз">
            <QuizForm
                questions={<QuizQuestions />}
                answers={<QuizAnswers />}
                submitButton={<CreateQuizButton />}
            />
        </ContainerLayout>
    </>
}