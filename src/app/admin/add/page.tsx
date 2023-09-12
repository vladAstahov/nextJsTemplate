import { Header } from "@/widgets/header";
import {QuizForm, QuizAnswers, QuizQuestions, CreateQuizButton} from '@/features/quiz/ui'

export default function QuizAdd() {
    return <>
        <Header />
        <QuizForm
            questions={<QuizQuestions />}
            answers={<QuizAnswers />}
            submitButton={<CreateQuizButton />}
        />
    </>
}