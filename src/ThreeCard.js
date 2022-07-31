import { useState } from "react";
import { useHistory } from "react-router-dom";
import React, {  useEffect } from 'react'
import db from "./data/db";
import { getDeck, getCard, cardShuffle, renderKeywords, getThreeCard } from './TarotCards';
import Card from "./components/Card";

const ThreeCard = () => {
    const [tarotDeck, setTarotDeck] = useState(null);
    const [card, setCard] = useState(null);
    const [trio, setTrio] = useState(null);
    

    const getThisDeck = () => {
        setTarotDeck(getDeck());
    }

    useEffect(() => {
        if (!tarotDeck) {
            getThisDeck();
        } else {
            return;
        }
    });

    const shuffle = () => {
        setTarotDeck(cardShuffle(tarotDeck));

    }

    
    const getThisCard = () => {
        // gets the first card on top of the deck and removes it from the deck
        setCard(getCard(tarotDeck));
    }
    const handleGetCards = () => {
        const ThreeCard = getThreeCard(tarotDeck)
        console.log(ThreeCard)
        setTrio(ThreeCard)
        console.log(trio)
    }

    const allThree = trio ? trio.map((newCard, index) => {
        let time = ''
        if (index === 0){ 
            time ="Past" 
        } else if (index === 1){ 
            time ="Present" 
        } else {
            time = "Future"
        }
        
        return (
        <li>

        <h3>{time}</h3>
        <Card card={newCard}/></li>
        )

}) : null 



    return (
        <div>
            <div className="options">
                <button color="primary" className="buttonTime" onClick={() => { setCard(null); shuffle() }} >Shuffle</button>
                <button className="buttonTime" onClick={() => handleGetCards()} >Draw Cards</button>
                <button className="buttonTime" onClick={() => { getThisDeck(); setTrio(null) }} >Reset</button>
            </div>
            {/* condition ? value if true : value if false */}
            {trio ?
                <ul>
                    {allThree}
                </ul>
                

                :
                <div className="Display">Three Card Tarot Spread
                    As you can imagine, this layout is good at suggesting some sort of linear path, sequence of events, cause and effect, or a way of getting from point a to point b.
                    

                    <p>Cards are in order by default; Shuffle and Draw a Card for every new draw.</p>
                    <p>Below are some things to keep in mind when choosing cards:</p>{'\n'}
                    👁
                    <p>Past, Present, Future</p>
                    <p>You, Your Path, Your Potential</p>
                    <p>You, Relationship, Partner</p>
                    <p>Situation, Action, Outcome</p>
                    <p>Idea, Process, Aspiration</p>
                </div>}
        </div>
    )
}

export default ThreeCard;

