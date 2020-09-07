import axios from "axios";


const instance = axios.create({
    baseURL: "https://react-learning-eng-app.firebaseio.com"
});

export const wordsAPI = {
        async getQuestions(quantityQuestions = 10) {
            try {
                return await instance.get(`/questions.json`);
            } catch (e) {
                console.log(e);
            }

    }
}