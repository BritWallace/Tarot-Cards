import { useEffect } from "react";
import db from "./data/db"; 
import particles from "./data/particles";

// import { getDeck } from "./Deck"

const Home = () => {
  // const card = db.cards[0];
  useEffect(() => {
    console.log("db");
    console.log(particles)
    
  })
  return (
    <div className="home">
      <h1 className="animate__animated animate__flip">✨🔮✨</h1>
      <h2>{ db.description }</h2>
      {db.cards.map(card => <p>{card.name}</p>)}
      
      {/* <img className="card-image" src={`Images/cards/${card.img}`} alt={card.name} /> */}
      
    </div>
  );
}

export default Home;