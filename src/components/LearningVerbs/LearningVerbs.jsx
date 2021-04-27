import React, {useState} from 'react';
import Input from "../UI/Input/Input";
import './LearningVerbs.sass'
import Icon from "../UI/Icon/Icon";
import {faCheckCircle, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

const LearningVerbs = (props) => {
    const [inputsData, setInputsData] = useState([
        {
            inputNumber: 0,
            value: '',
            type: 'text',
            label: 'infinitive',
            valid: false,
            touched: false,
            errorMessage: '',
            validation: {
                required: true,
                minLength: 2
            }
        },
        {
            inputNumber: 1,
            value: '',
            type: 'text',
            label: 'pastIndefinite',
            valid: false,
            touched: false,
            errorMessage: '',
            validation: {
                required: true,
                minLength: 2
            }
        },
        {
            inputNumber: 2,
            value: '',
            type: 'text',
            label: 'pastParticiple',
            valid: false,
            touched: false,
            errorMessage: '',
            validation: {
                required: true,
                minLength: 2
            }
        }
    ]);
    const [validationState, setValidationState] = React.useState({
        infinitive: false,
        pastIndefinite: false,
        pastParticiple: false
    })
    const inputState = {
        success: 'check',
        error: 'times'
    }

    const validateInput = (currentInput, validation) => {
        let {value, inputNumber} = currentInput;
        if (value.trim() === props.verbItem.forms[inputNumber]) {
            setValidationState({...validationState, validationState})
        }
    }

    const onChangeHandler = (event, inputItem) => {

        const newInputsData = [...inputsData];
        const currentInput = {...newInputsData[inputItem.inputNumber]};
        const rightWord = props.verbItem.forms[inputItem.inputNumber];

        currentInput.value = event.target.value;
        currentInput.touched = true;
        if (rightWord === currentInput.value.trim().toLowerCase()) {
            currentInput.valid = true;
            currentInput.errorMessage = '';
        }
        newInputsData[inputItem.inputNumber] = currentInput;
        validateInput(currentInput, currentInput.validation)
        setInputsData(newInputsData);
    };
    const onBlurHandler = (event, inputItem) => {
        const rightWord = props.verbItem.forms[inputItem.inputNumber];
        const newInputsData = [...inputsData];
        const currentInput = {...newInputsData[inputItem.inputNumber]};
        if (!currentInput.validation) {
            currentInput.valid = true;
        }
        if (currentInput.value.length < inputItem.validation.minLength) {
            currentInput.valid = false;
            currentInput.errorMessage = 'Слишком короткое значение.';
            return;
        }
        if (currentInput.value.trim().toLowerCase() !== rightWord) {
            currentInput.errorMessage = 'Не верно, попробуйте другой вариант'
        }
        newInputsData[inputItem.inputNumber] = currentInput;

        setInputsData(newInputsData)
    }

    const renderInputs = () => {
        return inputsData.map((inputItem, index) => {
            return (
                <div className={"verbInputBlock"} key={index + inputItem.label}>
                    <Input
                        disabled={inputItem.valid}
                        inputNuber={inputItem.inputNumber}
                        type={inputItem.type}
                        value={inputItem.value}
                        valid={inputItem.valid}
                        touched={inputItem.touched}
                        label={inputItem.label + ':'}
                        errorMessage={inputItem.errorMessage}
                        shouldValidate={!!inputItem.validation}
                        onChange={event => onChangeHandler(event, inputItem)}
                        onBlur={event => onBlurHandler(event, inputItem)}
                    />
                    {inputItem.valid
                        ? <Icon icon={faCheckCircle} color={"#2bc712"} size={1.5}/>
                        : null
                    }
                    {inputItem.errorMessage
                        ? <Icon icon={faExclamationTriangle} color={"red"} size={1.5}/>
                        : null
                    }
                    {inputItem.errorMessage
                        ? <div className={"errorMessage"}> {inputItem.errorMessage} </div>
                        : null
                    }
                </div>
            )
        })
    }


    return (
        <div className='learningVerbs'>
            <div>
                <p>Глагол - <strong className='activeWord'>{props.verbItem.verb}</strong></p>
            </div>
            <form className='verbsForm'>
                {renderInputs()}
                <button disabled={inputsData[0].valid || inputsData[1].valid || inputsData[2].valid === false}
                        className="btn btn-success">Следующий глагол</button>
            </form>
        </div>

    )
}

export default LearningVerbs;