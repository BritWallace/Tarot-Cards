import { useEffect } from "react";
import db from "./data/db"; 
// import { getDeck } from "./Deck"

const Home = () => {
  useEffect(() => {
    console.log("yo");
    
  })
  return (
    <div className="home">
      <h1 class="animate__animated animate__flip">✨🔮✨</h1>
      <h2>{db.description}</h2>
      {/* <img className="card-image" src={`Images/cards/${card.img}`} alt={card.name} />
       */}
    </div>
  );
}

export default Home;