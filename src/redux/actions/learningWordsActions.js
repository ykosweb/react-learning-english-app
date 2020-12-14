//Action Creators
const setQuestions = (questions) => ({type: 'SET_QUESTIONS', questions});

const toggleLoading = (loadingData) => ({type: 'TOGGLE_LOADING', loadingData});
const setNumberQuestionsToComplete = () => ({type: 'SET_NUMBER_QUESTIONS_TO_COMPLETE'})



const answerSuccess = (answerId) => ({type: 'ANSWER_SUCCESS', answerId});
const answerWrong = (answerId) => ({type: 'ANSWER_WRONG', answerId});
const quizComleted = () => ({type: 'QUIZ_COMPLETE'});
const needToRepeat = () => ({type: 'NEED_TO_REPEAT'});
const toNextQuestion = () => ({type: 'TO_NEXT_QUESTION'});

export const setUnansweredQuestions = () => ({type: 'SET_UNANSWERED_QUESTIONS'});

//Thunk
export const getQuestions =
    (quantityQuestions = 10) =>
        (dispatch, getState, {getFirebase, getFirestore}) => {
            let questions = [];
            getFirestore()
                .collection('questions')
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
            } else if ((activeQuestionNum + 1 === questions.length) && (activeQuestionNum + 1) !== successWords) {
                dispatch(needToRepeat());
            } else {
                dispatch(toNextQuestion());
            }
        }, 1000)

}
