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
  let time = ''
  if (index === 0) {
    time="The Present"
    } else if (index === 1){
      time="The Problem"
    } else if (index === 2){
      time="The Past"
    } else if (index === 3){
      time="The Future"
    }  else if (index === 4){
      time="Conscious"
    } else if (index === 5){
      time="Unconscious"
    } else if (index === 6){
      time="Your Influence "
    } else if (index === 7){
      time="External Influence"
    } else if (index === 8){
      time="Hopes and Fears "
    } else {
      time="Outcome "
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
            <button className="buttonTime" onClick={() => handleGetTenCards()} >Draw Cards</button>
            <button className="buttonTime" onClick={() => { getThisDeck(); setTen(null) }} >Reset</button>
        </div>
        {/* condition ? value if true : value if false */}
        {ten ?
            <ul>
            <div className="card-TenGrid">
                {allTen}
                </div>
            </ul>
            

            :
            
            <div className="Display">Ten Card Tarot Spread
            <li>
            <h3>☆☆☆☆☆</h3>
            1. The Present / The Self - This position reveals the current situation, and what is now happening. It can also be used to represent what the current state of mind is for the querent and a snapshot of who the querent is at the current moment in time.
            </li>
            <li>
            2. The Problem - This card represents the challenge that the querent is facing at this time, something that they need to resolve in order to make progress forward.
            </li>
            <li>
            3. The Past - Here we see the the past events, and also how they have shaped the current situation. This can give us some information on influences in the past that have lead up to this state of affairs.
            </li>
            <li>
              4. The Future - This card represents what could be a likely turn of events, given that nothing changes. These are usually short term happenings, and doesn’t represent the final resolution of these events.
            </li>
            <li>
            5. Conscious - This card explores what you are focused on, and where your mind is. This can represent your goals and your desires regarding this situation, as well as what your assumptions are.
            </li>
            <li>
              6. Unconscious - The unconscious reveals what is truly driving this situation; the feelings, the beliefs and the values that perhaps the querent doesn’t even understand yet. Sometimes this card may be a surprise, and can also represent a hidden influence.
            </li>
            <li>
            7. Your Influence - This card can be interpreted somewhat broadly - but in general, relates to how you see yourself, and how that perception can influence how this situation plays out. What beliefs about yourself do you carry? Do you expand yourself, or limit yourself?
            </li>
            <li>
            8. External Influence - This card represents the world around you and how it affects this situation. It may represent the social and emotional environment that you are operating in, as well as how others perceive you.

            </li>   
            <li>
              9. Hopes and Fears - One of the harder positions in this spread to decode, this card can represent both what you secretly desire, as well as what you may be trying to avoid. Human nature is often paradoxical, and what we fear the most is sometimes what we also truly have been hoping for all along.
            </li>
            <li>
              10. Outcome - This card is meant to be a summary of all the previous cards. Given all that is happening, what is the likely resolution of this event? Should you find a card here that does not have a favorable outcome, you can analyze the remainder of the spread to find another course of action.
            </li>
            </div>}
    </div>
)
}


export default TenCard;