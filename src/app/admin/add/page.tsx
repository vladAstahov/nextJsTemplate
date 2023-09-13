"use client";

import { Header } from "@/widgets/header";
import { QuizForm, QuizAnswers, QuizQuestions, CreateQuizButton } from '@/features/quiz/ui'
import { quizesModel } from "@/entities/quiz/model";

export default function QuizAdd() {
    quizesModel.activeModel.useInitQuizCreating()

    return <>
        <Header />
        <QuizForm
            questions={<QuizQuestions />}
            answers={<QuizAnswers />}
            submitButton={<CreateQuizButton />}
        />
    </>
}