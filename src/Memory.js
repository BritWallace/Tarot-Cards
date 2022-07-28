import { useEffect, useState  } from 'react'
import { shuffleDeck } from "./TarotCards"
import { cardImages } from "./components/FullDeck"
import MemoryCards from './components/MemoryCards'


function Memory() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)


const shuffleCards = () => {
  const shuffledCards = [...cardImages, ...cardImages]
  .sort(() => Math.random() - 0.5)
  .map(card => ({...card, id: Math.random()  }))
setCards(shuffledCards)

}

console.log(cards, turns)

return (
  <div className="Memory">
    <h3>Magic Memory</h3>
    <button className="buttonTime"onClick={shuffleCards}>New Game</button>

    <div className="card-grid">
      {cards.map(card => (
        <MemoryCards
        key={card.id}
        card={card}
        // handleChoice={handleChoice}

        />
      ))}
    </div>
  </div>
  );

}


export default Memory;

