import { useEffect, useState  } from 'react'
import { shuffleDeck } from "./TarotCards"
import { cardImages } from "./components/FullDeck"

function Memory() {
  const [cards, setCards] = useState([])
  


const shuffleCards = () => {
  const shuffledCards = [...cardImages, ...cardImages]
  .sort(() => Math.random() - 0.5)
  .map(card => ({...card, id: Math.random()  }))
setCards(shuffledCards)

}

return (
  <div className="Memory">
    <h3>Magic Memory</h3>
    <button className="buttonTime"onClick={shuffleCards}>New Game</button>

    <div className="card-grid">
      {cards.map(card => (
        
      ))}
    </div>
  </div>
)

}


export default Memory;

