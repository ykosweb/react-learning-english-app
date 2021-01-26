import {TOGGLE_LOADING} from "../actionsType";

const setVerbs = (verbs) => ({type: 'SET_VERBS', verbs});
const toggleLoading = (loadingData) => ({type: TOGGLE_LOADING, loadingData});

export const getVerbs = () =>
    (dispatch, getState, {getFirebase, getFirestore}) => {
        const verbs = [];
        const learningVerbsScore = getState().firebase.profile.learningVerbsScore;
        getFirestore()
            .collection('verbs')
            .where("id", ">=", learningVerbsScore + 1)
            .where("id", "<=", learningVerbsScore + 5)
            .get()
            .then((snapshot) => {
                snapshot.forEach((item) => {
                    verbs.push(item.data());
                })
                verbs.sort((a, b) => {
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
                dispatch(setVerbs(verbs));
                dispatch(toggleLoading(false));
            })
            .catch((error) => {
                console.log(error)
            })
}