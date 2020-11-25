import * as axios from "axios";


const instanceGetQuestions = axios.create({
    baseURL: "https://react-learning-eng-app.firebaseio.com"
});

export const wordsAPI = {
        async getQuestions(quantityQuestions = 10) {
            try {
                return await instanceGetQuestions.get(`/questions.json`);
            } catch (e) {
                console.log(e);
            }

    }
};


const authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-m8KYZs8zDITPmwnZbDHKv7lLw351l8k";

export const authAPI = {
    registration (email, password, returnSecureToken) {
        try {
            debugger;
            const response = axios.post(authUrl, {email, password, returnSecureToken});
            console.log(response)
            return response;
        } catch (e) {
            console.log(e);
        }

    }
}