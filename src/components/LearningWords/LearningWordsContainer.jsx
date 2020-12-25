import React from "react";
import {connect} from "react-redux";
import LearningWords from "./LearningWords";
import Preloader from "../UI/Preloader/Preloader";
import FinishedPage from "./FinishedPage/FinishedPage";
import RepeatedPage from "./RepeatedPage/RepeatedPage";
import {choseAnswer, getQuestions, setUnansweredQuestions} from "../../redux/actions/learningWordsActions";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class LearningWordsContainer extends React.Component {

  componentDidMount() {
    if (this.props.questions.length === 0) {
      this.props.getQuestions();
    }

    

  }

  choseAnswerHandler = (answerId) => {
    this.props.choseAnswer(answerId);
  };

  pageContentHandler = () => {
    if (this.props.completed) {
      return (
          <FinishedPage />
      )
    } else if (this.props.needToRepeat) {
      return (
          <RepeatedPage
              results={this.props.results}
              setUnansweredQuestions={this.props.setUnansweredQuestions}
          />
      )
    }
    else {
      return (
          <LearningWords
              questions={this.props.questions}
              activeQuestionNum={this.props.activeQuestionNum}
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
              : this.pageContentHandler()}
        </>


    )
  }
}


const mapStateToProps = (state) => {
  return {
    loadingData: state.learningWordsPage.loadingData,
    questions: state.learningWordsPage.questions,
    activeQuestionNum: state.learningWordsPage.activeQuestionNum,
    successWords: state.learningWordsPage.successWords,
    answerState: state.learningWordsPage.answerState,
    needToRepeat: state.learningWordsPage.needToRepeat,
    completed: state.learningWordsPage.completed,
    results: state.learningWordsPage.results
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestions: () => dispatch(getQuestions()),
    choseAnswer: (answerId) => dispatch(choseAnswer(answerId)),
    setUnansweredQuestions: () => dispatch(setUnansweredQuestions())
  }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(LearningWordsContainer);