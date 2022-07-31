import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getDeck, getSpread, cardShuffle, renderKeywords, getTenCard } from './TarotCards';
import db from "./data/db";
import Card from "./components/Card";



const TenCard
= () => {
  const [tarotDeck, setTarotDeck] = useState(null);
  const [spread, setSpread] = useState(null);
  const [card, setCard] = useState(null);
  const [ten, setTen] = useState(null);

  const getThisDeck = () => {
    setTarotDeck(getDeck());
  }

  const getThisSpread = () => {
    setSpread(getSpread(tarotDeck));
  }

  const shuffle = () => {
    setTarotDeck(cardShuffle(tarotDeck));

}

const handleGetTenCards = () => {
  const TenCard = getTenCard(tarotDeck)
  console.log(TenCard)
  setTen(TenCard)
  console.log(ten)
}

const allTen = ten ? ten.map((newCard, index) => {
  
  return (
    <li>
    <Card card={newCard}/></li>
    )
  
  }) : null 

  // const shuffleCards = () => {
  //   const shuffledCards = []
  //   .sort(() => Math.random() - 0.5)
  //   .map(card => ({...card, id: Math.random()  }))
  

  // }
  



  
  return (
    <div>
        <div className="options">
            <button color="primary" className="buttonTime" onClick={() => { setCard(null); shuffle() }} >Shuffle</button>
            <button className="buttonTime" onClick={() => handleGetTenCards()} >Draw Cards</button>
            <button className="buttonTime" onClick={() => { getThisDeck(); setTen(null) }} >Reset</button>
        </div>
        {/* condition ? value if true : value if false */}
        {ten ?
            <ul>
                {allTen}
            </ul>
            

            :
            <div className="Display">Three Card Tarot Spreads
                As you can imagine, this layout is good at suggesting some sort of linear path, sequence of events, cause and effect, or a way of getting from point a to point b.
                

                <p>information goes here</p>
            </div>}
    </div>
)
}


export default TenCard;