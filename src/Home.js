import { useEffect } from "react";
import db from "./data/db"; 
import particles from "./data/particles";
// import { allTarotImages } from './components/FullDeck'

// import { getDeck } from "./Deck"

const Home = () => {
  const cards = db.cards;
  useEffect(() => {
      
    console.log(particles)
    console.log(cards);
    
  })
  


  return (
    <div className="home">
    {/* <Particles height="100vh" width="100vw" params={particlesConfig} /> */}
      <h1 className="animate__animated animate__flip">✨🔮✨</h1>
      {/* <h2>{ db.description }</h2> */}
      <h1>Welcome to your personal Tarot card reading. </h1>
      <p> Everyone has a Tarot birth card associated with the Major Arcana, all you have to do is add up your birthday and hey presto! For example, 10/2/1980 = 1+0+2+1+9+8+0 = 21. Add those two numbers together: 2+1=3 = The World and the Empress. It may suggest someone born under this energy would love to travel. </p>
      {/* {db.cards.map(card => <p>{card.name}</p>)} */}
      <img className="tarotCards" src={db.cards.img} alt="Tarot cards"/>
      {/* <img className="card-image" src={`Images/cards/${card.img}`} alt={card.name} /> */}
      
    </div>
  );
}

export default Home;

{/* <Particles height="100vh" width="100vw" params={particlesConfig} />  */}