import React from "react";
import './InputItem.sass';
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const InputItem = ({name, inputValue, inputChangeHandler, validate}) => {
    return (
        <div className="inputItem">
            <label htmlFor="name">{name}:</label>
            <div className="inputBlock">
                <input
                    type="text"
                    name={name}
                    value={inputValue}
                    onChange={inputChangeHandler}
                />
                <FontAwesomeIcon icon={faCheck} />
            </div>


        </div>
    )
};

export default InputItem;