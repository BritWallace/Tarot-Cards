import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getDeck, getCard, cardShuffle, renderKeywords } from './TarotCards';
import db from "./data/db";

const TenCard
= () => {
  return (  
    <div className="tenCard">
    <h2>Ten card place holder</h2>

  </div>
  );
}

export default TenCard;