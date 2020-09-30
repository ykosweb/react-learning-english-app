import {wordsAPI} from "../api/api";

const SET_QUESTIONS = "SET_QUESTIONS";
const CHOSE_ANSWER = "CHOSE_ANSWER";
const TOGGLE_LOADING = "TOGGLE_LOADING";
const TO_NEXT_QUESTION = "TO_NEXT_QUESTION";
const REPEAT_UNANSWERED_QUESTIONS = "REPEAT_UNANSWERED_QUESTIONS";

const SET_NUMBER_QUESTIONS_TO_COMPLETE = "SET_NUMBER_QUESTIONS_TO_COMPLETE"

let initialState = {
    completed: false,
    numberQuestionsToComplete: null,
    loadingData: true,
    successWords: 0,
    activeQuestion: 0,
    questions: [],
    answerState: null,
    unansweredQuestions: [],
    results: []
};

let learningWordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTIONS: {
            return {...state, questions: action.questions}
        }
        case SET_NUMBER_QUESTIONS_TO_COMPLETE: {
            return {...state, numberQuestionsToComplete: state.questions.length}
        }
        case CHOSE_ANSWER: {
            let activeQuestion = state.questions[state.activeQuestion];
            if (action.answerId === activeQuestion.rightAnswerId) {
                return {
                    ...state,
                    answerState: {[action.answerId]: "success"},
                    successWords: state.successWords + 1
                }
            } else {
                let rightAnswer = activeQuestion.answerVariants[activeQuestion.rightAnswerId - 1].version;
                return {
                    ...state,
                    answerState: {[action.answerId]: "error"},
                    unansweredQuestions: [...state.unansweredQuestions, activeQuestion.id],
                    results: [...state.results, {[activeQuestion.word]: rightAnswer}]
                }
            }
        }
        case REPEAT_UNANSWERED_QUESTIONS:
            return {
                ...state
            }

        case TO_NEXT_QUESTION:
            if (state.successWords === state.numberQuestionsToComplete) {
                return {...state, completed: true}
            } else {
                return {
                    ...state,
                    activeQuestion: state.activeQuestion + 1,
                    answerState: null
                }
            }

        case TOGGLE_LOADING: {
            return {
                ...state, loadingData: action.loadingData
            }
        }
        default:
            return state;
    }
}

//Action Creators
export const setQuestions = (questions) => ({type: SET_QUESTIONS, questions});
export const choseAnswer = (answerId) => ({type: CHOSE_ANSWER, answerId});
export const toggleLoading = (loadingData) => ({type: TOGGLE_LOADING, loadingData});

const setNumberQuestionsToComplete = () => ({type: SET_NUMBER_QUESTIONS_TO_COMPLETE})
const toNextQuestion = () => ({type: TO_NEXT_QUESTION});
// const repeatUnansweredQuestions = () => ({type: REPEAT_UNANSWERED_QUESTIONS});


//Redux-Thunk

//Получение вопросов с FireBase
export const requestQuestions =
    (quantityQuestions = 10) =>
        (dispatch) => {
            wordsAPI.getQuestions(quantityQuestions).then(response => {
                dispatch(setQuestions(response.data));
                dispatch(setNumberQuestionsToComplete(response.data.length))
                dispatch(toggleLoading(false));
            })
        }

export const choseAnswerThunk = (answerId) =>
    (dispatch) => {
        dispatch(choseAnswer(answerId));
        setTimeout(() => {
            dispatch(toNextQuestion());
        }, 1000)

    }

export default learningWordsReducer;