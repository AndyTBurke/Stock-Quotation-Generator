import { useState } from 'react'
import quotes from "./quotes.jsx"

function App() {

  const [quote, setQuote] = useState(quotes())

  function newQuote() {
    setQuote(quotes())
  }

  return (
    <div className="App">
      <h1>Stock "Quote" Generator</h1>
      <div className="quote-container">
        <span className="quotation">"{quote.quotation}"</span>
      </div>
      <div className="author-container">- {quote.author}</div>
      <button onClick={newQuote}>NEW QUOTE</button>
    </div>
  )
}

export default App
