import { useState } from "react";
import { useHistory } from "react-router-dom";
import db from "./data/db";
// import { getDeck } from './Deck.js';



const SingleCard = () => {
  const card = db.cards[0];
  return (  
    <div className="singleCard">
    <h2>single card place holder</h2>
    <br />
      <h1>{card.name}</h1>
      <img src={`Images/${card.img}`} alt={card.Archetype} />
    {/* <p>{`images/cards/${db.card.number}`}</p> */}
  </div>
  );
}

export default SingleCard;



// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import db from "./data/db";
// // import { getDeck } from './Deck.js';

// const SingleCard = () => {
//   // grab random single card
//   const card = db.cards[0];

//   // display random single card details
//   return (
//     <div className="singleCard">
//       <h2>single card place holder</h2>
//       <br />
//       <h1>{card.name}</h1>
      
//       {/* <p>{`images/cards/${db.card.number}`}</p> */}
//       <img src={`Images/${card.img}`} alt={card.Archetype} />
//     </div>
//   );
// };

// export default SingleCard;