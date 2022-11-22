import React from 'react';
import "./tableString.scss";

function TableString(props) {

    return (
        <div className='table_string-container'>
            <div className={'table_string ' + (props.index % 2 == 0 ? "table_gray" : '')}>
                <div className='table_en'>{props.en}</div>
                <div className='table_transcription'>{props.transcription}</div>
                <div className='table_ru'>{props.ru}</div>
                <div className='table_btn-container'>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default TableString;