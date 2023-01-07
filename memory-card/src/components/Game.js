import React, { useState, useEffect } from 'react';
import Card from './Card';
import monkey from  './images/monkey.png'
import orangUtan from './images/orangutan.png'
import tiger from './images/tiger.png'
import lion from './images/lion.png'

export default function Game({score, setScore}) {

    const monkeyCard = new Card('monkey', false, monkey);
    const orangutanCard = new Card ('orangutan', false, orangUtan);
    const tigerCard = new Card ('tiger', false, tiger);
    const lionCard = new Card ('lion', false, lion);

    let animals = [monkeyCard, orangutanCard, tigerCard, lionCard];

    function resetAllFilters() {
        setScore(0)
      }    
    function roundOne (event) {

        const card = animals.find(element => element.name === event.target.name)
        const cardIndex = animals.indexOf(card);
        // console.log(animals[cardIndex])



        if(animals[cardIndex].clickStatus) {
            // console.log(animals[cardIndex])
            // animals[cardIndex].clickStatus = true
            console.log(animals[cardIndex])
            
            resetAllFilters();

        } else {
            animals[cardIndex].clickStatus = true
            setScore( score + 1)

        }
        //     setScore(score + 1)
        //     animals[cardIndex].clickStatus = true
        //     console.log(animals[cardIndex])
        // } 
    }
    
    const GameCards = () => {
        let list = [];
        animals.forEach(element => {
            list.push(
                <div className='box' key={element.name} onClick={roundOne}>
                    <img name={element.name} src={element.src} alt={element.name}></img>
                </div>
            )            
        });
        return <div className='gameCards'>{list}</div>
    }

    return (
        <div>
           <GameCards/>
        </div>
    )
}
