import React from "react";
import {connect} from "react-redux";
import LearningWords from "./LearningWords";
import Preloader from "../UI/Preloader/Preloader";
import FinishedPage from "./FinishedPage/FinishedPage";
import RepeatedPage from "./RepeatedPage/RepeatedPage";
import {
  choseAnswer,
  getQuestions,
  setUnansweredQuestions
} from "../../redux/actions/learningWordsActions";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {AnswerStateType, QuestionType, ResultItemType} from "../../redux/TypeScriptTypes";
import {AppStateType} from "../../redux/reducers/rootReducer";

type MapStatePropsType = {
  loadingQuestions: boolean
  questions: Array<QuestionType>
  activeQuestionNum: number
  successWords: number
  answerState: null | AnswerStateType
  needToRepeat: boolean
  completed: boolean
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
          {this.props.loadingQuestions
              ? <Preloader />
              : this.pageContentHandler()}
        </>


    )
  }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    loadingQuestions: state.learningWords.loadingQuestions,
    questions: state.learningWords.questions,
    activeQuestionNum: state.learningWords.activeQuestionNum,
    successWords: state.learningWords.successWords,
    answerState: state.learningWords.answerState,
    needToRepeat: state.learningWords.needToRepeat,
    completed: state.learningWords.completed,
    results: state.learningWords.results
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getQuestions: () => dispatch(getQuestions()),
    choseAnswer: (answerId: number) => dispatch(choseAnswer(answerId)),
    setUnansweredQuestions: () => dispatch(setUnansweredQuestions())
  }
}

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
//<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(LearningWordsContainer);