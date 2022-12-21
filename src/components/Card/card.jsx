import React, { useState } from 'react';
import list from '../list';
import "./card.scss";

function Card(props) {

    const [isCheckMode, setIsCheckMode] = useState(false);

    const handleCheck = () => {
        setIsCheckMode(!isCheckMode);
    }

    return (
        <div className='card-container'>
            <div className='card'>
                <div className='card-name'>{list[0].en}</div>
                <div className="card-transcription">{list[0].transcription}</div>
                {isCheckMode ? <div className='card-translation'>{list[0].ru}</div> : <button onClick={handleCheck} className='card-check_btn'>Check</button>}
            </div>
        </div>
    );
}

export default Card;