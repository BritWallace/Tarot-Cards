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
  const [disabled, setDisabled] = useState(false)


const shuffleCards = () => {
  const shuffledCards = [...cardImages, ...cardImages]
  .sort(() => Math.random() - 0.5)
  .map(card => ({...card, id: Math.random()  }))

  setChoiceOne(null)
  setChoiceTwo(null)
  setCards(shuffledCards)
  setTurns(0)
}

console.log(cards, turns)

const handleChoice =(card) => {
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
}

useEffect(() => {
  
  if (choiceOne && choiceTwo) {
    setDisabled(true) 
    
    if (choiceOne.src === choiceTwo.src) {
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.src === choiceOne.src) {
            return { ...card, matched: true }
          } else {
            return card
          }
        })
      })
      resetTurn()
    } else {
      setTimeout(() => resetTurn(), 1000)
    }

  }
}, [choiceOne, choiceTwo])

console.log(cards)

const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
  setDisabled(false)
}

useEffect(() => {
    shuffleCards()
}, [])



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
        flipped={card === choiceOne || card === choiceTwo || card.matched}
        disabled={disabled}
        />
      ))}
    </div>
    <p>Turns: {turns}</p>
  </div>
  );

}


export default Memory;

