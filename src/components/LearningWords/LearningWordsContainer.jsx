import React from "react";
import {connect} from "react-redux";
import LearningWords from "./LearningWords";
import {onUserChoseAnswer, requestQuestions} from "../../redux/learningWordsReducer";
import Preloader from "../common/Preloader/Preloader";

class LearningWordsContainer extends React.Component {
  componentDidMount() {
    if (this.props.questions.length === 0) {
      this.props.requestQuestions();
    }
  }
  choseAnswerHandler = (answerId) => {
    this.props.onUserChoseAnswer(answerId);
  }
  render() {
    return (
        <>
          {this.props.loadingData
              ? <Preloader />
              : <LearningWords
                  questions={this.props.questions}
                  activeQuestion={this.props.activeQuestion}
                  choseAnswer={this.choseAnswerHandler}
                  learningSuccess={this.props.learningSuccess}
                  answerState={this.props.answerState}
              />}
        </>


    )
  }
}


let mapStateToProps = (state) => {
  return {
    loadingData: state.learningWordsPage.loadingData,
    questions: state.learningWordsPage.questions,
    activeQuestion: state.learningWordsPage.activeQuestion,
    learningSuccess: state.learningWordsPage.learningSuccess,
    answerState: state.learningWordsPage.answerState
  }
}


export default connect(mapStateToProps, {requestQuestions, onUserChoseAnswer})(LearningWordsContainer);