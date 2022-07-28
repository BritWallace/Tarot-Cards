import "./MemoryCards.css"


export default function MemoryCards ({ card, handleChoice, flipped }) {
  
  const handleClick = () => {
    handleChoice(card)
  }

  




  return (
    <div className="card">
      <div className ={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back"
        src="/images/tarot-card-back.jpg"
        onClick={handleClick}
        alt="card back" />
      </div>
    </div>
  )
  
}

