import React, { useState } from 'react';
import Quote from '../../components/quote/Quote';
import TweetQuote from '../../components/tweet-quote/TweetQuote';
import './QuoteContainer.scss';

const generateRandonNum = (length) => Math.floor(Math.random()*length) 

export const QuoteContainer = (props) => {
  const state = props.state;
  const initialRandomNumber = state[generateRandonNum(props.state.length)];
  const [newQuote, setNewQuote] = useState(initialRandomNumber);
  
  
  const handleClick = () => {
    setNewQuote(state[generateRandonNum(props.state.length)])
  }

  return(
    <div id="quote-box">
        <Quote state = {newQuote} />
        <div className="buttons">
          <TweetQuote />
          <button id='new-quote' onClick={handleClick} >New quote</button>
        </div>
    </div>
  )
}