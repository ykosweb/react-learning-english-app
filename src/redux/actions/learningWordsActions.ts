import {
    ANSWER_SUCCESS,
    ANSWER_WRONG, NEED_TO_REPEAT, QUIZ_COMPLETE, RESET_DATA,
    SET_NUMBER_QUESTIONS_TO_COMPLETE,
    SET_QUESTIONS, SET_UNANSWERED_QUESTIONS,
    TO_NEXT_QUESTION, LOADING_QUESTIONS
} from '../actionsType';
import {QuestionType} from "../TypeScriptTypes";


type SetQuestionsActionType = {
    type: typeof SET_QUESTIONS
    questions: Array<QuestionType>
}
const setQuestions = (questions: Array<QuestionType>): SetQuestionsActionType =>
    ({type: SET_QUESTIONS, questions});

type LoadingQuestionsActionType = {
    type: typeof LOADING_QUESTIONS
    loadingQuestions: boolean
}
const isQuestionLoading = (loadingQuestions: boolean): LoadingQuestionsActionType =>
    ({type: LOADING_QUESTIONS, loadingQuestions});

type SetNumberQuestionsToCompleteActionType = {
    type: typeof SET_NUMBER_QUESTIONS_TO_COMPLETE
}
const setNumberQuestionsToComplete = (): SetNumberQuestionsToCompleteActionType =>
    ({type: SET_NUMBER_QUESTIONS_TO_COMPLETE});

type AnswerSuccessActionType = {
    type: typeof ANSWER_SUCCESS
    answerId: number
}
const answerSuccess = (answerId: number): AnswerSuccessActionType =>
    ({type: ANSWER_SUCCESS, answerId});

type AnswerWrongActionType = {
    type: typeof ANSWER_WRONG
    answerId: number
}
const answerWrong = (answerId: number): AnswerWrongActionType =>
    ({type: ANSWER_WRONG, answerId});

type QuizComletedActionType = {
    type: typeof QUIZ_COMPLETE
}
const quizComleted = (): QuizComletedActionType => ({type: QUIZ_COMPLETE});

type NeedToRepeatActionType = {
    type: typeof NEED_TO_REPEAT
}
const needToRepeat = (): NeedToRepeatActionType => ({type: NEED_TO_REPEAT});

type ToNextQuestionActionType = {
    type: typeof TO_NEXT_QUESTION
}
const toNextQuestion = (): ToNextQuestionActionType => ({type: TO_NEXT_QUESTION});

type ResetDataActionType = {
    type: typeof RESET_DATA
}
const resetData = (): ResetDataActionType => ({type: RESET_DATA})

type SetUnansweredQuestionsActionType = {
    type: typeof SET_UNANSWERED_QUESTIONS
}

export const setUnansweredQuestions = (): SetUnansweredQuestionsActionType =>
    ({type: SET_UNANSWERED_QUESTIONS});

//Thunk

//Получение массива вопросов с БД
export const getQuestions =
    (quantityQuestions = 10) =>
        (dispatch: any, getState: any, {getFirebase, getFirestore}: any) => {
            dispatch(resetData());
            let questions: Array<QuestionType> = [];
            const learningWordsScore = getState().firebase.profile.learningWordsScore;
            getFirestore()
                .collection('questions')
                .where("id", ">=", learningWordsScore + 1)
                .where("id", "<=", learningWordsScore + 10)
                .get()
                .then((snapshot: any) => {
                    snapshot.forEach((item: any) => {
                        questions.push(item.data());
                    });
                    questions.sort((a, b) => {
                        if (a.id > b.id) {
                            return 1
                        }
                        if (a.id < b.id) {
                            return -1
                        }
                        return 0
                    });
                })
                .then(() => {
                    dispatch(setQuestions(questions));
                    dispatch(setNumberQuestionsToComplete());
                    dispatch(isQuestionLoading(false));
                })
                .catch((error: any) => {
                    console.log(error)
                })
        }

//Действия после выбора ответа пользователем
export const choseAnswer = (answerId: number) =>
    (dispatch: any, getState: any) => {
        let {questions, activeQuestionNum} = getState().learningWords;
        let currentQuestion = questions[activeQuestionNum];

        (answerId === currentQuestion.rightAnswerId)
            ? dispatch(answerSuccess(answerId))
            : dispatch(answerWrong(answerId))
        let {successWords} = getState().learningWords;
        setTimeout(() => {
            if (successWords === 10) {
                dispatch(quizComleted());
                dispatch(setUserScore());
            } else if ((activeQuestionNum + 1 === questions.length) && (activeQuestionNum + 1) !== successWords) {
                dispatch(needToRepeat());
            } else {
                dispatch(toNextQuestion());
            }
        }, 1000)

};

//После прохождения пользователем 10 слов, получаем текущее значение пользовательского прогресса и увеличиваем на 10
export const setUserScore = () =>
        (dispatch: any, getState: any, {getFirebase, getFirestore}: any) => {
            const uid = getState().firebase.auth.uid;
            getFirestore()
                .collection('users')
                .doc(uid)
                .get()
                .then((snapshot: any) => {
                    let score = snapshot.data().learningWordsScore;
                    return score;
                })
                .then((score: any) => {
                    getFirestore().collection('users').doc(uid).set({
                        learningWordsScore: score + 10
                    }, {merge: true})
                })
}

export const getCompoundQueries = (min: number, max: number) => {
    return (dispatch: any, getState: any, {getFirestore}: any) => {
        let questions: Array<QuestionType> = [];
        const firestore = getFirestore();
        firestore.collection('questions')
            .where("id", ">=", min)
            .where("id", "<=", max)
            .get()
            .then((snapshot: any) => {
                snapshot.forEach((item: any) => {
                    questions.push(item.data())
                })
            }).then(() => {
            console.log(questions)
        })


    }
}
