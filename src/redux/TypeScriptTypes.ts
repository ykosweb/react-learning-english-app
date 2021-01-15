export type QuestionType = {
    word: string
    answerVariants: Array<string>
    rightAnswerId: number
    id: number
}
export type AnswerStateType = {
    [answerId: number]: (null | "error" | "success")
}
export type ResultItemType = {
    word: string
    translation: string
}