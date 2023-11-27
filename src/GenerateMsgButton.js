import React, { useState } from "react";

export default function GenerateMsgButton() {
    const [fortuneMsg, setFortuneMsg] = useState('Click the button below to generate a random fortune for you or a family member!');

    const fortuneTeller = {
        fortuneStart: ['You', 'Your mother', 'Your father', 'Your sister', 'Your brother', 'Your grandma', 'Your grandpa', 'Your aunt', 'Your uncle'],
        fortuneMiddle: ['will'],
        fortuneEnd: ['gain extreme amounts of wealth', 'become famous', 'go to a party soon', 'have many friends', 'do a good deed today', 'learn a new instrument', 'learn something new']
    };

    const handleGenerateMessage = event => {
        event.preventDefault();
        const message = generateRandomMessage(fortuneTeller);
        setFortuneMsg(message);
    };    
    
    const generateRandomNumber = num => {
        // Gets # from 0 -> num - 1
        return Math.floor(Math.random() * num)
    };
    
    const generateRandomMessage = (fortuneTeller) => {
        const randomStartInt = generateRandomNumber(fortuneTeller.fortuneStart.length);
        const randomMiddleInt = generateRandomNumber(fortuneTeller.fortuneMiddle.length);
        const randomEndInt = generateRandomNumber(fortuneTeller.fortuneEnd.length);
    
        const randomStartMsg = fortuneTeller.fortuneStart[randomStartInt];
        const randomMiddleMsg = fortuneTeller.fortuneMiddle[randomMiddleInt];
        const randomEndMsg = fortuneTeller.fortuneEnd[randomEndInt];
    
        const message = `${randomStartMsg} ${randomMiddleMsg} ${randomEndMsg}!`;
        return message;
    };

    return (
        <>
            <p className="fortuneMsg">{fortuneMsg}</p>
            <button className="btnBlue" onClick={handleGenerateMessage} >GENERATE MY FORTUNE</button>
        </>
    );
};