import React, {useState} from 'react';
import Input from "../UI/Input/Input";
import './LearningVerbs.sass'
import Icon from "../UI/Icon/Icon";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

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
        // if(!validation) return true;
        //
        // let isValid = true;
        // if (validation.required) {
        //     // если у нас не пустая строка и isValid не равен false, то isValid будет true
        //     isValid = value.trim() !== '' && isValid;
        // }
        // if(validation.minLength) {
        //     isValid = value.length >= validation.minLength && isValid;
        // }
        let {value, inputNumber} = currentInput;
        if (value.trim() === props.verbItem.forms[inputNumber]) {
            setValidationState({...validationState, validationState})
        }
    }

    const onChangeHandler = (event, input) => {
        const newInputsData = [...inputsData];
        const currentInput = {...newInputsData[input.inputNumber]};

        currentInput.value = event.target.value;
        currentInput.touched = true;
        newInputsData[input.inputNumber] = currentInput;
        validateInput(currentInput, currentInput.validation)

        setInputsData(newInputsData);
    }

    const renderInputs = () => {
        return inputsData.map((input, index) => {
            return (
                <div className={"verbInputBlock"} key={index + input.label}>
                    <Input
                        inputNuber={input.inputNumber}
                        type={input.type}
                        value={input.value}
                        valid={input.valid}
                        touched={input.touched}
                        label={input.label + ':'}
                        errorMessage={input.errorMessage}
                        shouldValidate={!!input.validation}
                        onChange={event => onChangeHandler(event, input)}
                    />
                    <Icon icon={faCheckCircle} color={"green"} size={1.5}/>
                </div>
            )
        })
    }




    return (
        <div className='learningVerbs'>
            <div>
                <p>Глагол - <span>{props.verbItem.verb}</span></p>
            </div>
            <form className='verbsForm'>
                {renderInputs()}
                <button disabled={validationState.infinitive } className="btn btn-success">Следующий глагол</button>
            </form>
        </div>

    )
}

export default LearningVerbs;