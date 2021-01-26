import React from "react";
import LearningVerbs from "./LearningVerbs";
import {connect} from "react-redux";
import {getVerbs} from "../../redux/actions/learningVerbsActions";
import Preloader from "../UI/Preloader/Preloader";

class LearningVerbsContainer extends React.Component {
    componentDidMount() {
        this.props.getVerbs()
    }

    render() {
        debugger;
        return (
            <>
                {this.props.toggleLoading
                    ? <Preloader />
                    : <LearningVerbs
                        verbItem={this.props.verbs[this.props.activeVerbNumber]}

                    />}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        verbs: state.learningVerbs.verbs,
        activeVerbNumber: state.learningVerbs.activeVerbNumber,
        toggleLoading: state.learningVerbs.toggleLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getVerbs: () => dispatch(getVerbs())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(LearningVerbsContainer);