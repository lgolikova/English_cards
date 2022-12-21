import React, { useState } from 'react';
import "./tableString.scss";

function TableString(props) {

    const [isEditMode, setIsEditMode] = useState(false);

    const handleEdit = () => {
        setIsEditMode(!isEditMode);
    }

    const handleCancel = () => {
        setIsEditMode(!isEditMode);
    }

    return (
        <div className='table_string-container'>
            {/* <div className={'table_string ' + (props.index % 2 === 0 ? "table_gray" : '')}>
                <div className='table_en'>{props.en}</div>
                <div className='table_transcription'>{props.transcription}</div>
                <div className='table_ru'>{props.ru}</div>
                <div className='table_btn-container'>
                    <button className='btn-edit'>Edit</button>
                    <button className='btn-del'>Delete</button>
                </div>
            </div> */}

            <div className={'table_string ' + (props.index % 2 === 0 ? "table_gray" : '')}>
                {isEditMode ? <input className='table_input' type="text" defaultValue={props.en} ></input> : <div className='table_en'>{props.en}</div>}
                {isEditMode ? <input className='table_input' type="text" defaultValue={props.transcription}></input> : <div className='table_transcription'>{props.transcription}</div>}
                {isEditMode ? <input className='table_input' type="text" defaultValue={props.ru}></input> : <div className='table_ru'>{props.ru}</div>}
                <div className='table_btn-container'>
                    {isEditMode ?
                        <>
                            <button className='btn-save'>Save</button>
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


