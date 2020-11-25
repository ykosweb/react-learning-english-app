//Action Creators
const setQuestions = (questions) => ({type: 'SET_QUESTIONS', questions});
// const choseAnswer = (answerId) => ({type: CHOSE_ANSWER, answerId});
const toggleLoading = (loadingData) => ({type: 'TOGGLE_LOADING', loadingData});
const setNumberQuestionsToComplete = () => ({type: 'SET_NUMBER_QUESTIONS_TO_COMPLETE'})

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
                    debugger;
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
                    debugger;
                    dispatch(setQuestions(questions));
                    dispatch(setNumberQuestionsToComplete());
                    dispatch(toggleLoading(false));
                })
                .catch(error => {
                    console.log(error)
                })
        }