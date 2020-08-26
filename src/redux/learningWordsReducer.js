let initialState = {
    words: [
        {
            id: 1,
            word: "boy",
            answerVariants: [
                {id: 1, version: "Мальчик"},
                {id: 2, version: "Девочка"},
                {id: 3, version: "Лопата"},
                {id: 4, version: "Штангенциркуль"}
            ],
            rightAnswerId: 1
        },
        {
            id: 2,
            word: "human",
            answerVariants: [
                {id: 1, version: "Бублик"},
                {id: 2, version: "Конь"},
                {id: 3, version: "Человек"},
                {id: 4, version: "Дерево"}
            ],
            rightAnswerId: 3
        },
        {
            id: 3,
            word: "table",
            answerVariants: [
                {id: 1, version: "Табло"},
                {id: 2, version: "Табель"},
                {id: 3, version: "Табурет"},
                {id: 4, version: "Стол"}
            ],
            rightAnswerId: 4
        }
    ]
};

let learningWordsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default learningWordsReducer;