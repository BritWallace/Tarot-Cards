import { useEffect } from "react";
import db from "./data/db"; 
// import { getDeck } from "./Deck"

const Home = () => {
  useEffect(() => {
    console.log("yo");
    
  })
  return (
    <div className="home">
      <h2>Homepage</h2>
      <h2>{db.description}</h2>
      {/* <img src={`images/cards/${card.img}`} alt={card.name} /> */}
    </div>
  );
}

export default Home;