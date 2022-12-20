import React from 'react'

const QuoteBox = ({randomQuote,randomColor,getRandomAll}) => {

    const colorObj = {
        color: randomColor
    }
    const backgroundObj = {
        background: randomColor
    }

    return (
        <div style={colorObj} className="card">
           <p className="card__quote">{randomQuote.quote}</p>
           <h1 className="card_author">{randomQuote.author}</h1>
           <button 
           className="card__btn" 
           style={backgroundObj} 
           onClick={getRandomAll}>
           &#62;
           </button>
        </div>
    );
};

export default QuoteBox;