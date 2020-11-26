//Action Creators
const setQuestions = (questions) => ({type: 'SET_QUESTIONS', questions});

const toggleLoading = (loadingData) => ({type: 'TOGGLE_LOADING', loadingData});
const setNumberQuestionsToComplete = () => ({type: 'SET_NUMBER_QUESTIONS_TO_COMPLETE'})

const toNextQuestion = () => ({type: 'TO_NEXT_QUESTION'});
const answerHandling = (answerId) => ({type: 'ANSWER_HANDLING', answerId});

export const setUnansweredQuestions = () => ({type: 'SET_UNANSWERED_QUESTIONS'})

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
    (dispatch) => {
        dispatch(answerHandling(answerId));
        setTimeout(() => {
            dispatch(toNextQuestion());
        }, 1000)

    }