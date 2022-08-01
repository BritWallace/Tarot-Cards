import { useEffect } from "react";
import db from "./data/db"; 
import particles from "./data/particles";


const Home = () => {
  const cards = db.cards;
  useEffect(() => {
      
    console.log(particles)
    console.log(cards);
    
  })
  


  return (
    <div className="home">
    
      <h1 className="animate__animated animate__flip">✨🔮✨</h1>
      {/* <h2>{ db.description }</h2> */}
      <h1>Welcome to your personal Tarot card reading. </h1>
      
      {/* {db.cards.map(card => <p>{card.name}</p>)} */}
      {/* <img className="tarotCards" src={db.cards.img} alt="Tarot cards"/> */}
      
      
    </div>
  );
}

export default Home;

{/* <Particles height="100vh" width="100vw" params={particlesConfig} />  */}