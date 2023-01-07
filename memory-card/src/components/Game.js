import React, { useReducer } from 'react';
import Card from './Card';
import monkey from  './images/monkey.png'
import orangUtan from './images/orangutan.png'
import tiger from './images/tiger.png'
import lion from './images/lion.png'

export default function Game() {

    const monkeyCard = new Card('monkey', false, monkey);
    const orangutanCard = new Card ('orangutan', false, orangUtan);
    const tigerCard = new Card ('tiger', false, tiger);
    const lionCard = new Card ('lion', false, lion);

    let animalsLevelOne = [monkeyCard, orangutanCard, tigerCard, lionCard];
    
    const reducer = (state, action) => {

        const card = animalsLevelOne.find(element => element.name === action.name);
        const cardIndex = animalsLevelOne.indexOf(card);

        switch (action.clickStatus) {
            case false:
                animalsLevelOne[cardIndex].clickStatus = true;
                return {count: state.count + 1};
            case true:
                return {count: state.count = 0};
            default:
                throw new Error ();            
        }
    }

    const [count, dispatch] = useReducer(reducer, {count: 0});

    function isClicked(clickedCard) {
        const card = animalsLevelOne.find(element => element.name === clickedCard);
        const cardIndex = animalsLevelOne.indexOf(card);
        return animalsLevelOne[cardIndex];
    }

    const GameCards = () => {
        let list = [];
        animalsLevelOne.forEach(element => {
            list.push(
                <div className='box' key={element.name}>
                    <img onClick={(() => dispatch(isClicked(element.name)))} name={element.name} src={element.src} alt={element.name}></img>
                </div>
            )            
        });
        return <div className='gameCards'>{list}</div>
    }

    return (
        <div>
            <div className='userScore'>
                <span>Score : {count.count} </span>
                <span>Best Score : 0</span>
            </div>
           <GameCards/>
        </div>
    )
}
