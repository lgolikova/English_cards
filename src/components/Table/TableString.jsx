import React, { useState, useEffect } from 'react';
import "./tableString.scss";

function TableString(props) {

    const [isEditMode, setIsEditMode] = useState(false);

    const handleEdit = () => {
        setIsEditMode(!isEditMode);
    }

    const handleCancel = () => {
        setIsEditMode(!isEditMode);
    }

    const [initialValue, setInitialValue] = useState({});

    useEffect(() => {
        setInitialValue({
            english: props.en,
            transcription: props.transcription,
            russian: props.ru,
        })
    }, [props.en, props.transcription, props.ru])

    function getValue(e) {
        e.preventDefault()
        const copyInitialValue = { ...initialValue }
        copyInitialValue[e.target.name] = e.target.value
        setInitialValue(copyInitialValue)
    }

    console.log(initialValue);

    function validate(value) {
        if (value !== '') {
            return true;
        }
        return false;
    }

    const validateFlag = validate(initialValue.english) && validate(initialValue.transcription) && validate(initialValue.russian)

    const validateEn = validate(initialValue.english);
    const validateTr = validate(initialValue.transcription);
    const validateRu = validate(initialValue.russian);

    const [btnDisabled, setBtnDisabled] = useState(false);
    function becomeDisable() {
        if (!validateFlag) {
            setBtnDisabled(true);
        } else {
            setBtnDisabled(false);
        }
    }


    return (
        <div className='table_string-container'>

            <div className={'table_string ' + (props.index % 2 === 0 ? "table_gray" : '')}>
                {isEditMode ? <input className={validateEn ? 'table_input' : 'empty_input'} type="text" defaultValue={props.en} onChange={getValue} name="english" onBlur={becomeDisable}></input> : <div className='table_en'>{props.en}</div>}
                {isEditMode ? <input className={validateTr ? 'table_input' : 'empty_input'} type="text" defaultValue={props.transcription} onChange={getValue} name="transcription" onBlur={becomeDisable}></input> : <div className='table_transcription'>{props.transcription}</div>}
                {isEditMode ? <input className={validateRu ? 'table_input' : 'empty_input'} type="text" defaultValue={props.ru} onChange={getValue} name="russian" onBlur={becomeDisable}></input> : <div className='table_ru'>{props.ru}</div>}
                <div className='table_btn-container'>
                    {isEditMode ?
                        <>
                            <button className='btn-save' disabled={btnDisabled}>Save</button>
                            <button className='btn-cancel' onClick={handleCancel}>Cancel</button>
                        </> :
                        <>
                            <button className='btn-edit' onClick={handleEdit}>Edit</button>
                            <button className='btn-del'>Delete</button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default TableString;


