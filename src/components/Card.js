import React from 'react';



const Card = ({card}) => {

const renderKeywords =(card) => {
    const keywords = card.keywords;
    let keywordString = '';
    for (let i=0; i < keywords.length; i++){
      let keyword =keywords[i];
      if (i === keywords.length -1) keywordString += keyword;
      else keywordString += keyword + ', '
  
    }
    return keywordString.trim();
  }






        
        return (  
          <div className="three_cards">
                    <img className="card-image" src={`Images/${card.img}`} alt={card.name} />
                    <div className="card-details">
                        <div className="card-name">{card.number}: {card.name}</div>
                        <div className="keywords">Keywords: {renderKeywords(card)}</div>
                        <div className="meaning">
                            <div className="label">
                                Light:
                            </div>
                            <ul>
                                {card.meanings.light.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="meaning">
                            <div className="label">
                                Shadow:
                            </div>
                            <ul>
                                {card.meanings.shadow.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="meaning">
                            <div className="label">
                                Questions to Ask Yourself
                        </div>
                            <ul>
                                {card.QuestionsToAsk.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
        

      
)
}



export default Card;