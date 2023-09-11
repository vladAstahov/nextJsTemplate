import { createStore, createEvent, sample, createEffect } from 'effector'
import { useStore, useUnit } from 'effector-react'
import { type Question, type Answer } from './types'
import { type Quiz } from '@/entities/quiz/model/types'
import { quizApi } from '@/shared/api'

const updateQuiz = createEvent<Partial<Quiz>>()

const updateQuestion = createEvent<{
    id: Question['id']
} & Partial<Question>>()
const addQuestion = createEvent()
const reorderQuestions = createEvent<{
    startIndex: number,
    endIndex: number
}>()

const updateAnswer = createEvent<{
    questionId: Question['id']
    id: Answer['id']
} & Partial<Answer>>()
const addAnswer = createEvent<{
    questionId: Question['id']
}>()

const resetQuiz = createEvent()

const $quiz = createStore<Quiz>({
    id: null,
    name: '',
    active: false,
    link: '',
    limit: 0
}).on(updateQuiz, (state, payload) => ({
    ...state,
    ...payload
})).reset(resetQuiz)

const $questions = createStore<Question[]>([
    {
        id: '1',
        text: '',
    },
    {
        id: '2',
        text: ''
    },
    {
        id: '3',
        text: ''
    }
])
    .on(updateQuestion, (state, payload) => state.map(question => question.id === payload.id ? {
        ...question,
        ...payload
    } : question))
    .on(addQuestion, (state) => [...state, {
        id: String(state.length + 1),
        index: state.length,
        text: ''
    }])
    .on(reorderQuestions, (state, { startIndex, endIndex }) => {
        const [removed] = state.splice(startIndex, 1);
        state.splice(endIndex, 0, removed);

        return state
    }).reset(resetQuiz)

const $answers = createStore<Record<Answer['questionId'], Answer[]>>({
    '1': [
        {
            id: '1',
            questionId: '1',
            text: '',
            isCorrect: true
        },
        {
            id: '2',
            questionId: '1',
            text: '',
            isCorrect: false
        },
    ],
    '2': [
        {
            id: '1',
            questionId: '2',
            text: '',
            isCorrect: true
        },
        {
            id: '2',
            questionId: '2',
            text: '',
            isCorrect: false
        },
    ],
    '3': [
        {
            id: '1',
            questionId: '3',
            text: '',
            isCorrect: true
        },
        {
            id: '2',
            questionId: '3',
            text: '',
            isCorrect: false
        },
    ]
})
    .on(updateAnswer, (state, { questionId, id, ...answer }) => ({
        ...state,
        [questionId]: state[questionId].map(item => item.id === id ? { ...item, ...answer } : item)
    }))
    .on(addAnswer, (state, { questionId }) => ({
        ...state,
        [questionId]: [
            ...state[questionId],
            {
                id: String(state[questionId].length),
                questionId,
                text: '',
                isCorrect: false
            }
        ]
    })).reset(resetQuiz)

sample({
    source: {
        answers: $answers,
        questions: $questions,
    },
    clock: addQuestion,
    fn: ({ answers, questions }) => ({
        ...answers,
        [questions.length + 1]: [
            {
                id: '1',
                questionId: String(questions.length + 1),
                text: '',
                isCorrect: true
            },
            {
                id: '2',
                questionId: String(questions.length + 1),
                text: '',
                isCorrect: false
            },
        ]
    }),
    target: $answers
})

sample({
    source: {
        answers: $answers
    },
    clock: updateAnswer,
    filter: (_, payload) => payload.isCorrect,
    fn: ({ answers }, { questionId, id, isCorrect }) => ({
        ...answers,
        [questionId]: answers[questionId].map(answer => answer.id === id ? {
            ...answer,
            isCorrect,
        } : {
            ...answer,
            isCorrect: false
        })
    }),
    target: $answers
})

const createQuizFx = createEffect(quizApi.createQuiz)
const createQuiz = createEvent()

sample({
    source: {
        quiz: $quiz,
        answers: $answers,
        questions: $questions
    },
    clock: createQuiz,
    fn: data => ({
        quiz: {
            name: data.quiz.name,
            active: data.quiz.active,
            link: data.quiz.link,
            usersLimit: data.quiz.limit
        },
        answers: Object.values(data.answers).reduce((prev, curr) => [...prev, ...curr], []),
        questions: data.questions
    }),
    target: createQuizFx
})

const resetCreated = createEvent()
const $created = createStore<boolean>(false).reset(resetCreated)

sample({
    clock: createQuizFx.doneData,
    fn: () => true,
    target: $created
})
sample({
    source: {
        created: $created
    },
    clock: $created,
    filter: ({ created }) => created,
    target: resetQuiz
})

const useQuiz = () => {
    const quiz = useStore($quiz)
    const update = useUnit(updateQuiz)

    return {
        quiz, update
    }
}
const useQuestions = () => ({
    questions: useStore($questions),
    update: useUnit(updateQuestion),
    add: useUnit(addQuestion),
    reorder: useUnit(reorderQuestions)
})

const useAnswers = () => ({
    answers: useStore($answers),
    update: useUnit(updateAnswer),
    add: useUnit(addAnswer)
})

const useCreate = () => ({
    create: useUnit(createQuiz),
    isLoading: useStore(createQuizFx.pending),
    isCreated: useStore($created),
    reset: useUnit(resetCreated)
})

export const quizModel = {
    useQuiz,
    useQuestions,
    useAnswers,
    useCreate
}