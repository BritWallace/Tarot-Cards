import { useEffect, useState  } from 'react'
import { shuffleDeck } from "./TarotCards"
import { cardImages } from "./components/FullDeck"
import MemoryCards from './components/MemoryCards'
import './App.css'


function Memory() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)


const shuffleCards = () => {
  const shuffledCards = [...cardImages, ...cardImages]
  .sort(() => Math.random() - 0.5)
  .map(card => ({...card, id: Math.random()  }))
setCards(shuffledCards)

}

console.log(cards, turns)

const handleChoice =(card) => {
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
}

return (
  <div className="Memory">
    <h3>Magic Memory</h3>
    <button className="buttonTime"onClick={shuffleCards}>New Game</button>

    <div className="card-grid">
      {cards.map(card => (
        <MemoryCards
        key={card.id}
        card={card}
        handleChoice={handleChoice}

        />
      ))}
    </div>
  </div>
  );

}


export default Memory;

