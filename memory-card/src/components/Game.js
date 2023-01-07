import React, { useState, useEffect, useReducer } from 'react';
import Card from './Card';
import monkey from  './images/monkey.png'
import orangUtan from './images/orangutan.png'
import tiger from './images/tiger.png'
import lion from './images/lion.png'
import fox from './images/fox.png'
import leopard from './images/leopard.png'
import gorilla from './images/gorilla.png'
import wolf from './images/wolf.png'
import bear from  './images/bear.png'
import dog from './images/dog.png'
import hedgehog from './images/hedgehog.png'
import mouse from './images/mouse.png'
import otter from './images/otter.png'
import polar from './images/polar.png'
import raccoon from './images/raccoon.png'
import zebra from './images/zebra.png'
import uuid from 'react-uuid';

export default function Game() {

    const monkeyCard = new Card('monkey', false, monkey);
    const orangutanCard = new Card ('orangutan', false, orangUtan);
    const tigerCard = new Card ('tiger', false, tiger);
    const lionCard = new Card ('lion', false, lion);
    const foxCard = new Card ('fox', false, fox);
    const leopardCard = new Card ('leopard', false, leopard);
    const gorillaCard = new Card ('gorilla', false, gorilla);
    const wolfCard = new Card ('wolf', false, wolf);
    const bearCard = new Card('bear', false, bear);
    const hedgehogCard = new Card ('hedgehog', false, hedgehog);
    const dogCard = new Card ('dog', false, dog);
    const mouseCard = new Card ('mouse', false, mouse);
    const otterCard = new Card ('otter', false, otter);
    const polarCard = new Card ('polar', false, polar);
    const raccoonCard = new Card ('raccon', false, raccoon);
    const zebraCard = new Card ('zebra', false, zebra);

    let animalsArray = [monkeyCard, orangutanCard, tigerCard, lionCard,foxCard,leopardCard, gorillaCard, wolfCard, bearCard,dogCard,hedgehogCard,mouseCard,otterCard,polarCard,raccoonCard,zebraCard];
    let animalsLevelOne = [monkeyCard, orangutanCard, tigerCard, lionCard];
    
    const reducer = (state, action) => {
        const card = animalsArray.find(element => element.name === action.name);
        const cardIndex = animalsArray.indexOf(card);
        switch (action.clickStatus) {
            case false:
                animalsArray[cardIndex].clickStatus = true;
                return {count: state.count + 1};
            case true:
                return {count: state.count = 0};
            default:
                throw new Error ();
        }       
    }

    const [count, dispatch] = useReducer(reducer, {count: 0});
    const [level, setLevel] = useState(1);

    useEffect(() => {
        if (count.count === 0) {
            setLevel(1)
        }
        if (count.count === 4 || count.count === 8 ) {
            setLevel(level + 1)
        }
      }, [count.count] )

    function isClicked(clickedCard, list) {
        const card = list.find(element => element.name === clickedCard);
        const cardIndex = list.indexOf(card);
        return list[cardIndex];
    }

    const GameCardsLevelOne = () => {
        let list = [];
        animalsLevelOne.forEach(element => {
            list.push(
                <div className='box' key={uuid()}>
                    <img onClick={(() => dispatch(isClicked(element.name, animalsLevelOne)))} name={element.name} src={element.src} alt={element.name}></img>
                </div>
            )            
        });
        return <div className='gameCards'>{list}</div>
    }

    const GameCardsLevelTwo = () => {

        let animalsLevelTwo = [foxCard, monkeyCard, lionCard,leopardCard, gorillaCard,tigerCard, wolfCard,orangutanCard];
        const levelOne = ['monkey','orangutan','tiger','lion'];
        
        for(let i = 0; i < levelOne.length; i++) {
            const card = animalsLevelTwo.find(element => element.name === levelOne[i]);
            const cardIndex = animalsLevelTwo.indexOf(card);
            animalsLevelTwo[cardIndex].clickStatus = true;
        }

        let list = [];
        animalsLevelTwo.forEach(element => {
            list.push(
                <div className='box' key={uuid()}>
                    <img onClick={(() => dispatch(isClicked(element.name, animalsLevelTwo)))} name={element.name} src={element.src} alt={element.name}></img>
                </div>
            )            
        });
        return <div className='gameCards'>{list}</div>
    }

    const GameCardsLevelThree = () => {

        let animalsLevelThree = [gorillaCard, bearCard, tigerCard, mouseCard, foxCard, monkeyCard, polarCard, otterCard, dogCard, lionCard,leopardCard, hedgehogCard,raccoonCard, wolfCard,zebraCard, orangutanCard];
        const levelTwo = ['monkey','orangutan','tiger','lion','leopard', 'gorilla', 'fox','wolf'];

        for(let i = 0; i < levelTwo.length; i++) {
            const card = animalsLevelThree.find(element => element.name === levelTwo[i]);
            const cardIndex = animalsLevelThree.indexOf(card);
            animalsLevelThree[cardIndex].clickStatus = true;
        }

        let list = [];
        animalsLevelThree.forEach(element => {
            list.push(
                <div className='box' key={uuid()}>
                    <img onClick={(() => dispatch(isClicked(element.name, animalsLevelThree)))} name={element.name} src={element.src} alt={element.name}></img>
                </div>
            )            
        });
        return <div className='gameCards'>{list}</div>
    }

    return (
        <div>
            <div className='userScore'>
                <span style={{fontSize:'25px'}}>Score: {count.count} </span>
                <span style={{fontSize:'25px'}}>Level: {level}</span>
            </div>
            {count.count === 16 && 
            <div className='win'>
                <span style={{fontSize:'30px'}}>You Win!</span>
                <button style={{cursor:'pointer'}} onClick={()=> window.location.reload()}>Play again</button>
            </div>
            } 
           {count.count < 4 &&
            <GameCardsLevelOne/>
           }
           {(count.count >= 4 && count.count < 8 ) &&
            <GameCardsLevelTwo/>
           }
           {
            (count.count >= 8 && count.count < 16) &&
            <GameCardsLevelThree/>
           }
        </div>
    )
}
