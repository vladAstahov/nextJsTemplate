"use client";

import { Header } from "@/widgets/header"
import {CreateQuizButton, QuizAnswers, QuizForm, QuizQuestions} from "@/features/quiz/ui";
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import {quizesModel} from "@/entities/quiz/model";
import {useEffect} from "react";

export default function QuizPage() {
    const params = useParams()
    const {} = quizesModel.activeModel.useGetQuiz(params.id!)

    return <>
        <Header />
        <QuizForm
            questions={<QuizQuestions />}
            answers={<QuizAnswers />}
            submitButton={<CreateQuizButton />}
        />
    </>
}