import React, { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox.jsx'
import color from './utils/color.js'
import quotes from './json/quotes.json'


function App() {

  const getIndexRandom = arr => Math.floor(Math.random() * arr.length) 

  const firstQuote = quotes[getIndexRandom (quotes)]
  const firstColor = color[getIndexRandom (color)]

  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)
  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])
  }

  return (
    <div style={{background: randomColor}} className="App">
      <QuoteBox 
      randomQuote={randomQuote}
      randomColor={randomColor}
      getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
