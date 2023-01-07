import React, { useState } from 'react';
import Game from './Game';

export default function Headbar({score, bestScore}) {


    


    return (
        <div>
            <div className='headBar'>
                <span style={{fontSize:'30px'}}>Memory Card</span>
                <div className='userScore'>
                    <div style={{display:'flex', gap:'10px'}}>
                        <span id='score'>Score:</span>
                        <span id='score'>{score}</span>
                    </div>
                        <div style={{display:'flex', gap:'10px'}}>
                        <span id='score'>Best score:</span>
                        <span id='score'>{bestScore}</span>
                    </div>                
                </div>
            </div>
        </div>
    )
}