import React from "react";
import {connect} from "react-redux";
import LearningWords from "./LearningWords";
import {onUserChoseAnswer, requestQuestions} from "../../redux/learningWordsReducer";
import Preloader from "../common/Preloader/Preloader";
import CompletedPage from "./CompletedPage/CompletedPage";

class LearningWordsContainer extends React.Component {

  componentDidMount() {
    if (this.props.questions.length === 0) {
      this.props.requestQuestions();
    }
  }

  choseAnswerHandler = (answerId) => {
    this.props.onUserChoseAnswer(answerId);
  }

  isCompleted = () => {
    if (this.props.completed) {
      return (
          <CompletedPage />
      )
    } else {
      return (
          <LearningWords
              questions={this.props.questions}
              activeQuestion={this.props.activeQuestion}
              choseAnswer={this.choseAnswerHandler}
              successWords={this.props.successWords}
              answerState={this.props.answerState}
          />
      )
    }
  }


  render() {
    return (
        <>
          {this.props.loadingData
              ? <Preloader />
              : this.isCompleted()}
        </>


    )
  }
}


let mapStateToProps = (state) => {
  return {
    loadingData: state.learningWordsPage.loadingData,
    questions: state.learningWordsPage.questions,
    activeQuestion: state.learningWordsPage.activeQuestion,
    successWords: state.learningWordsPage.successWords,
    answerState: state.learningWordsPage.answerState,
    completed: state.learningWordsPage.completed
  }
}


export default connect(mapStateToProps, {requestQuestions, onUserChoseAnswer})(LearningWordsContainer);