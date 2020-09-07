import {wordsAPI} from "../api/api";

const SET_QUESTIONS = "SET_QUESTIONS";
const CHOSE_ANSWER = "CHOSE_ANSWER";
const TOGGLE_LOADING = "TOGGLE_LOADING";
const TO_NEXT_QUESTION = "TO_NEXT_QUESTION";


let initialState = {
    loadingData: true,
    learningSuccess: 0,
    activeQuestion: 0,
    questions: [],
    answerState: null,
    unansweredQuestions: []
};

let learningWordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTIONS: {
            return {...state, questions: action.questions}
        }
        case CHOSE_ANSWER: {
            let activeQuestion = state.questions[state.activeQuestion];
            if (action.answerId === activeQuestion.rightAnswerId) {
                return {
                    ...state,
                    answerState: {[action.answerId]: "success"},
                    learningSuccess: state.learningSuccess + 1
                }
            } else {
                console.log(state.unansweredQuestions)
                return {
                    ...state,
                    answerState: {[action.answerId]: "error"},
                    // unansweredQuestions: state.unansweredQuestions.push(activeQuestion.id)
                }
            }
        }
        case TO_NEXT_QUESTION:
            return {
               ...state,
                activeQuestion: state.activeQuestion + 1,
                answerState: null
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
export const toNextQuestion = () => ({type: TO_NEXT_QUESTION})

//Redux-Thunk

//Получение вопросов с FireBase, при переходе на страницу LearningWords
export const requestQuestions =
    (quantityQuestions = 10) =>
        (dispatch) => {
            wordsAPI.getQuestions(quantityQuestions).then(response => {
                dispatch(setQuestions(response.data));
                dispatch(toggleLoading(false));
            })
}

export const onUserChoseAnswer = (answerId) =>
    (dispatch) => {
        dispatch(choseAnswer(answerId));
        setTimeout(() => {
            dispatch(toNextQuestion());
        }, 1000)

}

export default learningWordsReducer;