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

export default function Game({round}) {

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
    
    const reducer = (state, action) => {
        // const card = animalsArray.find(element => element.name === action.name);
        // const cardIndex = animalsArray.indexOf(card);

        let result = round.filter(animal => animal.name === action.name).length
        console.log(action.name)
        switch (result) {
            case result = 1:
                return {count: state.count + 1,
                };
            default:
                return {count: state.count = 0};
        }       
    }

    const [count, dispatch] = useReducer(reducer, {count: 0, array: round});
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
        round.push(list[cardIndex])
        console.log('round', round)

        return list[cardIndex]
        ;
    }

    const GameCardsLevelOne = () => {

        let arr = [];
        while(arr.length <= 4){
            let r = Math.floor(Math.random() * 4);
            if(arr.indexOf(r) === -1) arr.push(r);
               if(arr.length === 4) {
                break;
            }
        }

        let animalsLevelOne = [monkeyCard, orangutanCard, tigerCard, lionCard];

        let list = [];
        // animalsLevelOne.forEach(element => {
        
            for(let i = 0; i < animalsLevelOne.length; i++) {
                list.push(
                    <div className='box' key={uuid()}>
                        <img onClick={(() => dispatch(isClicked(animalsLevelOne[arr[i]].name, animalsLevelOne)))} name={animalsLevelOne[arr[i]].name} src={animalsLevelOne[arr[i]].src} alt={animalsLevelOne[arr[i]].name}></img>
                    </div>
                )
            }   
        ;
        return <div className='gameCards'>{list}</div>
    }

    const GameCardsLevelTwo = () => {

        let arr = [];
        while(arr.length <= 8){
            let r = Math.floor(Math.random() * 8);
            if(arr.indexOf(r) === -1) arr.push(r);
               if(arr.length === 8) {
                break;
            }
        }

        let animalsLevelTwo = [foxCard, monkeyCard, lionCard,leopardCard, gorillaCard,tigerCard, wolfCard,orangutanCard];

        const levelOne = ['monkey','orangutan','tiger','lion'];
        
        for(let i = 0; i < levelOne.length; i++) {
            const card = animalsLevelTwo.find(element => element.name === levelOne[i]);
            const cardIndex = animalsLevelTwo.indexOf(card);
            animalsLevelTwo[cardIndex].clickStatus = true;
        }

        let list = [];
       
            for(let i = 0; i < animalsLevelTwo.length; i++) {
                list.push(
                    <div className='box' key={uuid()}>
                        <img onClick={(() => dispatch(isClicked(animalsLevelTwo[arr[i]].name, animalsLevelTwo)))} name={animalsLevelTwo[arr[i]].name} src={animalsLevelTwo[arr[i]].src} alt={animalsLevelTwo[arr[i]].name}></img>
                    </div>
                )
            }   
        ;
        return <div className='gameCards'>{list}</div>
    }

    const GameCardsLevelThree = () => {

        let arr = [];
        while(arr.length <= 16){
            let r = Math.floor(Math.random() * 16);
            if(arr.indexOf(r) === -1) arr.push(r);
               if(arr.length === 16) {
                break;
            }
        }

        let animalsLevelThree = [gorillaCard, bearCard, tigerCard, mouseCard, foxCard, monkeyCard, polarCard, otterCard, dogCard, lionCard,leopardCard, hedgehogCard,raccoonCard, wolfCard,zebraCard, orangutanCard];
        const levelTwo = ['monkey','orangutan','tiger','lion','leopard', 'gorilla', 'fox','wolf'];

        for(let i = 0; i < levelTwo.length; i++) {
            const card = animalsLevelThree.find(element => element.name === levelTwo[i]);
            const cardIndex = animalsLevelThree.indexOf(card);
            animalsLevelThree[cardIndex].clickStatus = true;
        }

        let list = [];
       
            for(let i = 0; i < animalsLevelThree.length; i++) {
                list.push(
                    <div className='box' key={uuid()}>
                        <img onClick={(() => dispatch(isClicked(animalsLevelThree[arr[i]].name, animalsLevelThree)))} name={animalsLevelThree[arr[i]].name} src={animalsLevelThree[arr[i]].src} alt={animalsLevelThree[arr[i]].name}></img>
                    </div>
                )
            }   
        ;
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
