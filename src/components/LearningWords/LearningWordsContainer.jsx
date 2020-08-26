import React from "react";
import {connect} from "react-redux";
import LearningWords from "./LearningWords";

let mapStateToProps = (state) => {
  return {
    
  }
}

let mapDispatchToProps = dispatch => {
  return {

  }
}

const LearningWordsContainer = connect(mapStateToProps, mapDispatchToProps)(LearningWords)
export default LearningWordsContainer;