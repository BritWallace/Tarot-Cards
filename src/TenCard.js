import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getDeck, getSpread, cardShuffle, renderKeywords } from './TarotCards';
import db from "./data/db";

const TenCard
= () => {
  const [tarotDeck, setTarotDeck] = useState(null);
  const [spread, setSpread] = useState(null);
  const [card, setCard] = useState(null);


  const getThisDeck = () => {
    setTarotDeck(getDeck());
  }

  const getThisSpread = () => {
    setSpread(getSpread(tarotDeck));
  }

  // const shuffleCards = () => {
  //   const shuffledCards = []
  //   .sort(() => Math.random() - 0.5)
  //   .map(card => ({...card, id: Math.random()  }))
  

  // }
  



  
return (
  <div className="TenCardButton">
    {/* <img className="card-images" src={`images/${card.img}`} alt={card.name} /> */}
    <h3>Ten Cards</h3>

    <button className="buttonTime"onClick={cardShuffle}>New Reading</button>
    <div className="fullDeck">
      
    </div>
  </div>
  );

}




export default TenCard;