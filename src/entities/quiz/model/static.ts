const DEFAULT_QUIZ = {
    id: null,
    name: '',
    active: false,
    link: '',
    limit: 0
}

const DEFAULT_QUESTIONS = [
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
]

const DEFAULT_ANSWERS = {
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
}

export const staticValue = {
    DEFAULT_QUIZ,
    DEFAULT_QUESTIONS,
    DEFAULT_ANSWERS
}