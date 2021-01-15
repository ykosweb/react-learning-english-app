import React from "react";
import {connect} from "react-redux";
import LearningWords from "./LearningWords";
import Preloader from "../UI/Preloader/Preloader";
import FinishedPage from "./FinishedPage/FinishedPage";
import RepeatedPage from "./RepeatedPage/RepeatedPage";
import {
  choseAnswer,
  getQuestions,
  setUnansweredQuestions,
  setUserScore
} from "../../redux/actions/learningWordsActions";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {AnswerStateType, QuestionType, ResultItemType} from "../../redux/TypeScriptTypes";

type MapStatePropsType = {
  loadingData: boolean,
  questions: Array<QuestionType>,
  activeQuestionNum: number,
  successWords: number,
  answerState: AnswerStateType,
  needToRepeat: boolean,
  completed: boolean,
  results: Array<ResultItemType>
}

type MapDispatchPropsType = {
  setUnansweredQuestions: () => void
  getQuestions: () => void
  choseAnswer: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class LearningWordsContainer extends React.Component<PropsType> {

  componentDidMount() {
    if (this.props.questions.length === 0) {
      this.props.getQuestions();
    }
  }

  pageContentHandler = () => {
    if (this.props.completed) {
      return (
          <FinishedPage getQuestions={this.props.getQuestions}/>
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
              choseAnswer={this.props.choseAnswer}
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


const mapStateToProps = (state: any) => {
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    getQuestions: () => dispatch(getQuestions()),
    choseAnswer: (answerId: number) => dispatch(choseAnswer(answerId)),
    setUnansweredQuestions: () => dispatch(setUnansweredQuestions()),
    setUserScore: () => dispatch(setUserScore())
  }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(LearningWordsContainer);