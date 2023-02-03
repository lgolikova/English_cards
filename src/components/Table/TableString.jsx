import React, { useState, useRef } from 'react';
import "./tableString.scss";

function TableString(props) {

    const [isEditMode, setIsEditMode] = useState(false);

    const handleEdit = () => {
        setIsEditMode(!isEditMode);
    }

    const handleCancel = () => {
        setIsEditMode(!isEditMode);
    }


    const [btnDisabled, setBtnDisabled] = useState(false);

    const [valueEn, setValueEn] = useState(props.en)

    function handleChange(e) {
        setValueEn(e.target.value);
        console.log(valueEn);
    }

    function isValid(value) {
        if (value === '') {
            setBtnDisabled(true);
            return false
        }
        return true

    }

    const validateEn = isValid(valueEn);





    return (
        <div className='table_string-container'>

            <div className={'table_string ' + (props.index % 2 === 0 ? "table_gray" : '')}>
                {isEditMode ? <input className={validateEn ? 'table_input' : 'empty_input'} type="text" defaultValue={props.en} onChange={handleChange} name="english"></input> : <div className='table_en'>{props.en}</div>}
                {isEditMode ? <input className='table_input' type="text" defaultValue={props.transcription} name="transcript"></input> : <div className='table_transcription'>{props.transcription}</div>}
                {isEditMode ? <input className='table_input' type="text" defaultValue={props.ru} name="russian"></input> : <div className='table_ru'>{props.ru}</div>}
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


