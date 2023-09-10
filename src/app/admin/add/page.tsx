import { Header } from "@/widgets/header";
import { AddQuizForm, QuizAnswers, QuizQuetions } from '@/features/quiz/ui'

export default function QuizAdd() {
    return <>
        <Header />
        <AddQuizForm
            questions={<QuizQuetions />}
            answers={<QuizAnswers />}
        />
    </>
}