import db from "./data/db";

export const getDeck = () => {
  const deck = Object.values(db.cards);
  return deck;
}

export const cardShuffle = (deck) => {
  let count = deck.length;
  let temp;
  while (count) {
    temp = deck.splice(Math.floor(Math.random() * count), 1);
    deck.splice(count, 0, temp[0]);
    count--;  
    
}
return deck;

}

export const renderKeywords =(card) => {
  const keywords = card.keywords;
  let keywordString = '';
  for (let i=0; i < keywords.length; i++){
    let keyword =keywords[i];
    if (i === keywords.length -1) keywordString += keyword;
    else keywordString += keyword + ', '

  }
  return keywordString.trim();
}

export const getCard = (deck) => {
  let drawnCard = deck.splice(0, 1);
  return drawnCard[0];
}

export const getSpread = (deck, num) => {
  let thisSpread = [];
  for (let i = 0; i < num; i++) {
      thisSpread.push(deck[i]);
  }
  return thisSpread;
}

export const cardImage = [
  { "src": "images/cO1.jpg"},
  { "src": "images/cO2.jpg"}
  
]

export const shuffleDeck = () => {
  const shuffledDeck = [...cardImage]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))
}




