import React from "react";
import {connect} from "react-redux";
import LearningWords from "./LearningWords";
import Preloader from "../common/Preloader/Preloader";
import FinishedPage from "./FinishedPage/FinishedPage";
import RepeatedPage from "./RepeatedPage/RepeatedPage";
import {getQuestions} from "../../redux/actions/learningWordsActions";

class LearningWordsContainer extends React.Component {

  componentDidMount() {
    if (this.props.questions.length === 0) {
      this.props.getQuestions();
    }
  }

  choseAnswerHandler = (answerId) => {
    this.props.choseAnswerThunk(answerId);
  }

  pageContentHandler = () => {
    if (this.props.completed) {
      return (
          <FinishedPage />
      )
    } else if (this.props.repeatQuestions) {
      return (
          <RepeatedPage results={this.props.results}/>
      )
    }
    else {
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
    debugger;
    return (
        <>
          {this.props.loadingData
              ? <Preloader />
              : this.pageContentHandler()}
        </>


    )
  }
}


const mapStateToProps = (state) => {
  return {
    loadingData: state.learningWordsPage.loadingData,
    questions: state.learningWordsPage.questions,
    activeQuestion: state.learningWordsPage.activeQuestion,
    successWords: state.learningWordsPage.successWords,
    answerState: state.learningWordsPage.answerState,
    repeatQuestions: state.learningWordsPage.repeatQuestions,
    completed: state.learningWordsPage.completed,
    results: state.learningWordsPage.results
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestions: () => dispatch(getQuestions())
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(LearningWordsContainer);