let initialState = {
    completed: true,
    numberQuestionsToComplete: null,
    loadingData: true,
    successWords: 0,
    activeQuestion: 0,
    questions: [],
    answerState: null,
    unansweredQuestions: [],
    needToRepeat: false,
    results: []
};


let learningWordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QUESTIONS': {
            return {...state, questions: action.questions}
        }
        case 'SET_NUMBER_QUESTIONS_TO_COMPLETE': {
            return {...state, numberQuestionsToComplete: state.questions.length}
        }
        case 'ANSWER_HANDLING': {
            let activeQuestion = state.questions[state.activeQuestion];
            if (action.answerId === activeQuestion.rightAnswerId) {
                return {
                    ...state,
                    answerState: {[action.answerId]: "success"},
                    successWords: state.successWords + 1
                }
            } else {
                let rightAnswer = activeQuestion.answerVariants[activeQuestion.rightAnswerId - 1];
                return {
                    ...state,
                    answerState: {[action.answerId]: "error"},
                    unansweredQuestions: [...state.unansweredQuestions, activeQuestion.id],
                    results: [...state.results, {word: activeQuestion.word, translation: rightAnswer}]
                }
            }
        }
        case 'TO_NEXT_QUESTION':
            console.log(state);
            //(Количество вопросов в стейте === Количество правильно отвеченных) опрос заканчивается.
            if (state.successWords === 10) {
                return {...state, completed: true}
            // Если пользователь ответил хотя бы на один вопрос не верно, переходим на страницу повтора
            } else if ((state.activeQuestion + 1 === state.questions.length) && (state.activeQuestion + 1) !== state.successWords) {
                return {...state, needToRepeat: true}
            // Переход к следующему вопросу, после ответа пользователя.
            } else {
                return {
                    ...state,
                    activeQuestion: state.activeQuestion + 1,
                    answerState: null
                }
            }
        case 'SET_UNANSWERED_QUESTIONS':
            debugger;
            let repeatQuestions = [];
            state.unansweredQuestions.forEach(num => {
                repeatQuestions.push(state.questions.find(question => question.id === num))
            })
            return {
                ...state,
                activeQuestion: 0,
                answerState: null,
                unansweredQuestions: [],
                numberQuestionsToComplete: repeatQuestions.length,
                questions: repeatQuestions,
                needToRepeat: false,

            }
        case 'TOGGLE_LOADING': {
            return {
                ...state, loadingData: action.loadingData
            }
        }
        default:
            return state;
    }
}


//Redux-Thunk

//Получение вопросов с FireBase
// export const requestQuestions =
//     (quantityQuestions = 10) =>
//         (dispatch) => {
//             wordsAPI.getQuestions(quantityQuestions).then(response => {
//                 dispatch(setQuestions(response.data));
//                 dispatch(setNumberQuestionsToComplete(response.data.length))
//                 dispatch(toggleLoading(false));
//             })
//         }
//
// export const choseAnswerThunk = (answerId) =>
//     (dispatch) => {
//         dispatch(choseAnswer(answerId));
//         setTimeout(() => {
//             dispatch(toNextQuestion());
//         }, 1000)
//
//     }

export default learningWordsReducer;