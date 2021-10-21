import React from "react";
import './TweetQuote.scss';

const TweetQuote = (props) => {
  const sharedQuote = `"${props.share[0]}" - ${props.share[1]}`;
  const tweetURL = `https://twitter.com/intent/tweet?text=${sharedQuote}%0AQuotes%20from%20https://mia-v.github.io/fcc-random-quote-machine/`;

  return(
    <a  
    className="twitter-share-button"
    href={tweetURL}
    data-url="https://mia-v.github.io/fcc-random-quote-machine/"
    target="_blank"
    rel="noreferrer" 
    id="tweet-quote">    
      <i className="fab fa-twitter-square"></i>
    </a> 
   )
}

export default TweetQuote;