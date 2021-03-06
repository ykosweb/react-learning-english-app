import {
    ANSWER_SUCCESS,
    ANSWER_WRONG, LOADING_QUESTIONS, NEED_TO_REPEAT, QUIZ_COMPLETE, RESET_DATA,
    SET_NUMBER_QUESTIONS_TO_COMPLETE,
    SET_QUESTIONS, SET_UNANSWERED_QUESTIONS,
    TO_NEXT_QUESTION
} from '../actionsType';
import {AnswerStateType, QuestionType, ResultItemType} from "../TypeScriptTypes";

type InitialStateType = typeof initialState


let initialState = {
    completed: false,
    numberQuestionsToComplete: null as (null | number),
    loadingQuestions: true,
    successWords: 0,
    activeQuestionNum: 0,
    questions: [] as Array<QuestionType>,
    answerState: null as AnswerStateType | null,
    unansweredQuestions: [] as Array<number>,
    needToRepeat: false,
    results: [] as Array<ResultItemType>
};


let learningWordsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_QUESTIONS: {
            return {...state, questions: action.questions}
        }
        case SET_NUMBER_QUESTIONS_TO_COMPLETE: {
            return {...state, numberQuestionsToComplete: state.questions.length}
        }
        case ANSWER_SUCCESS: {
            return {
                ...state,
                answerState: {[action.answerId]: "success"},
                successWords: state.successWords + 1
            }
        }
        case ANSWER_WRONG: {
            let currentQuestion = state.questions[state.activeQuestionNum];
            let rightAnswer = currentQuestion.answerVariants[currentQuestion.rightAnswerId - 1];
            return {
                ...state,
                answerState: {[action.answerId]: "error"},
                unansweredQuestions: [...state.unansweredQuestions, currentQuestion.id],
                results: [...state.results, {word: currentQuestion.word, translation: rightAnswer}]
            }
        }

        case TO_NEXT_QUESTION: {
            return {
                ...state,
                activeQuestionNum: state.activeQuestionNum + 1,
                answerState: null
            }
        }
        case NEED_TO_REPEAT: {
            return {...state, needToRepeat: true}
        }
        case QUIZ_COMPLETE: {
            return {...state, completed: true}
        }

        case SET_UNANSWERED_QUESTIONS:
            let repeatQuestions: any = [];
            state.unansweredQuestions.forEach(num => {
                repeatQuestions.push(state.questions.find(question => question.id === num))
            })
            return {
                ...state,
                activeQuestionNum: 0,
                answerState: null,
                unansweredQuestions: [],
                numberQuestionsToComplete: repeatQuestions.length,
                questions: repeatQuestions,
                needToRepeat: false,

            }
        case LOADING_QUESTIONS: {
            return {
                ...state, loadingQuestions: action.loadingQuestions
            }
        }
        case RESET_DATA: {
            return {
                ...state,
                completed: false,
                numberQuestionsToComplete: null,
                successWords: 0,
                activeQuestionNum: 0,
                answerState: null,
                unansweredQuestions: [],
                needToRepeat: false,
                results: []
            }
        }
        default:
            return state;
    }
}

export default learningWordsReducer;