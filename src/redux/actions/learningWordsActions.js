import {
    ANSWER_SUCCESS,
    ANSWER_WRONG, NEED_TO_REPEAT, QUIZ_COMPLETE, RESET_DATA,
    SET_NUMBER_QUESTIONS_TO_COMPLETE,
    SET_QUESTIONS, SET_UNANSWERED_QUESTIONS,
    TO_NEXT_QUESTION, TOGGLE_LOADING
} from '../actionsType';

//Action Creators
const setQuestions = (questions) => ({type: SET_QUESTIONS, questions});
const toggleLoading = (loadingData) => ({type: TOGGLE_LOADING, loadingData});
const setNumberQuestionsToComplete = () => ({type: SET_NUMBER_QUESTIONS_TO_COMPLETE})

const answerSuccess = (answerId) => ({type: ANSWER_SUCCESS, answerId});
const answerWrong = (answerId) => ({type: ANSWER_WRONG, answerId});
const quizComleted = () => ({type: QUIZ_COMPLETE});
const needToRepeat = () => ({type: NEED_TO_REPEAT});
const toNextQuestion = () => ({type: TO_NEXT_QUESTION});
const resetData = () => ({type: RESET_DATA})

export const setUnansweredQuestions = () => ({type: SET_UNANSWERED_QUESTIONS});

//Thunk

//Получение массива вопросов с БД
export const getQuestions =
    (quantityQuestions = 10) =>
        (dispatch, getState, {getFirebase, getFirestore}) => {
            dispatch(resetData());
            let questions = [];
            const learningWordsScore = getState().firebase.profile.learningWordsScore;
            getFirestore()
                .collection('questions')
                .where("id", ">=", learningWordsScore + 1)
                .where("id", "<=", learningWordsScore + 10)
                .get()
                .then((snapshot) => {
                    snapshot.forEach((item) => {
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
                    dispatch(toggleLoading(false));
                })
                .catch(error => {
                    console.log(error)
                })
        }

//Действия после выбора ответа пользователем
export const choseAnswer = (answerId) =>
    (dispatch, getState) => {
        let {questions, activeQuestionNum} = getState().learningWordsPage;
        let currentQuestion = questions[activeQuestionNum];

        (answerId === currentQuestion.rightAnswerId)
            ? dispatch(answerSuccess(answerId))
            : dispatch(answerWrong(answerId))
        let {successWords} = getState().learningWordsPage;
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
        (dispatch, getState, {getFirebase, getFirestore}) => {
            const uid = getState().firebase.auth.uid;
            getFirestore()
                .collection('users')
                .doc(uid)
                .get()
                .then((snapshot) => {
                    let score = snapshot.data().learningWordsScore;
                    return score;
                })
                .then((score) => {
                    getFirestore().collection('users').doc(uid).set({
                        learningWordsScore: score + 10
                    }, {merge: true})
                })
}

export const getCompoundQueries = (min, max) => {
    return (dispatch, getState, {getFirestore}) => {
        let questions = [];
        const firestore = getFirestore();
        firestore.collection('questions')
            .where("id", ">=", min)
            .where("id", "<=", max)
            .get()
            .then(snapshot => {
                snapshot.forEach(item => {
                    questions.push(item.data())
                })
            }).then(() => {
            console.log(questions)
        })


    }
}
