import React, { useState } from 'react';
import "./game.scss";
import "../Card/card.scss";
import list from '../list';
import { useRef, useEffect } from 'react';

function Game(props) {

    const [isCheckMode, setIsCheckMode] = useState(false);

    const handleCheck = () => {
        setIsCheckMode(!isCheckMode);
        sumLearnd(list[cardIndex].id);
    }

    //слайдер    
    const [cardIndex, setCardIndex] = useState(0);

    const Next = () => {

        if (cardIndex === list.length - 1) {
            setCardIndex(0);
        } else {
            setCardIndex(cardIndex + 1)
        }
        setIsCheckMode(false);
    };

    const Previous = () => {
        if (cardIndex === 0) {
            setCardIndex(list.length - 1)
        } else {
            setCardIndex(cardIndex - 1)
        }
        setIsCheckMode(false);
    };

    //фокус на кнопке    
    const ref = useRef(null);

    useEffect(() => {
        ref.current.focus();
    }, [list[cardIndex].en]);

    //счетчик изученных слов
    const [learned, setLearned] = useState(0);
    const [learntId, setLearntId] = useState([])

    const sumLearnd = (id) => {

        const arr = [...learntId]

        if (!arr.includes(id)) {
            arr.push(id)
        }

        setLearntId(arr)
        setLearned(arr.length)
    };
    console.log(learntId)

    return (
        <>
            <div className='game-container'>
                <img src='./assets/images/left-arrow.png' onClick={Previous}></img>
                <div className='card-container'>
                    <div className='card'>
                        <div className='card-name'>{list[cardIndex].en}</div>
                        <div className="card-transcription">{list[cardIndex].transcription}</div>
                        {isCheckMode ? <div className='card-translation'>{list[cardIndex].ru}</div> : <button onClick={handleCheck} className='card-check_btn' ref={ref}>Check</button>}
                        {learned ? <div className='words-counter'>learned words: {learned}</div> : ''}
                    </div>
                </div>
                <img src='./assets/images/right-arrow.png' onClick={Next}></img>
            </div>
        </>
    );
}

export default Game;