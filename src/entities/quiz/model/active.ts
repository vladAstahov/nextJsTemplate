import { createStore, createEvent, sample, createEffect } from 'effector'
import { createGate, useGate, useStore, useUnit } from 'effector-react'
import { type Question, type Answer } from './types'
import { type Quiz } from '@/entities/quiz/model/types'
import { quizApi } from '@/shared/api'
import { staticValue } from './static'
import { questionsToDomain, quizDataToDomain, toApi } from '@/entities/quiz/model/lib'

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

const $quiz = createStore<Quiz>(staticValue.DEFAULT_QUIZ).on(updateQuiz, (state, payload) => ({
    ...state,
    ...payload
})).reset(resetQuiz)

const $questions = createStore<Question[]>(staticValue.DEFAULT_QUESTIONS)
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

const $answers = createStore<Record<Answer['questionId'], Answer[]>>(staticValue.DEFAULT_ANSWERS)
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
        [questions.length]: [
            {
                id: '1',
                questionId: String(questions.length),
                text: '',
                isCorrect: true
            },
            {
                id: '2',
                questionId: String(questions.length),
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
    fn: data => toApi(data),
    target: createQuizFx
})

const updateQuizFx = createEffect(quizApi.updateQuiz)
const updateQuizApi = createEvent()

sample({
    source: {
        quiz: $quiz,
        answers: $answers,
        questions: $questions
    },
    clock: updateQuizApi,
    fn: data => toApi(data),
    target: updateQuizFx
})

const resetCreated = createEvent()
const $created = createStore<boolean>(false).reset(resetCreated)

sample({
    clock: [createQuizFx.doneData, updateQuizFx.doneData],
    fn: () => true,
    target: $created
})

const deleteQuizFx = createEffect(quizApi.deleteQuiz)

const quizGate = createGate<NonNullable<Quiz['id']>>()
const getQuizByIdFx = createEffect(quizApi.getQuiz)

const createQuizGate = createGate()

sample({
    clock: createQuizGate.open,
    target: resetQuiz
})

sample({
    clock: getQuizByIdFx.doneData,
    fn: ({ quiz }) => quizDataToDomain(quiz),
    target: updateQuiz
})
sample({
    clock: getQuizByIdFx.doneData,
    fn: ({ questions }) => questionsToDomain(questions),
    target: $questions
})
sample({
    clock: getQuizByIdFx.doneData,
    fn: ({ answers }) => answers,
    target: $answers
})

sample({
    source: {
        id: quizGate.state
    },
    clock: quizGate.open,
    fn: ({ id }) => id,
    target: getQuizByIdFx
})

const useGetQuiz = (id: NonNullable<Quiz['id']>) => {
    useGate(quizGate, id)

    return {
        isLoading: useStore(getQuizByIdFx.pending)
    }
}

const useInitQuizCreating = () => {
    useGate(createQuizGate)
}

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

const useUpdate = () => ({
    update: useUnit(updateQuizApi),
    isLoading: useStore(updateQuizFx.pending),
    isCreated: useStore($created),
    reset: useUnit(resetCreated)
})

const useDelete = () => ({
    deleteQuiz: useUnit(deleteQuizFx),
})

export const activeModel = {
    useQuiz,
    useQuestions,
    useAnswers,
    useCreate,
    useUpdate,
    useGetQuiz,
    useDelete,
    useInitQuizCreating
}