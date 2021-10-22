import React from 'react';
import './Quote.scss';

const Quote = (props) => {
const quote = props.state[0];
const author = props.state[1];

return(
    <div className = 'quote-and-author'>
      <div id="text" >
      <i className="fa fa-quote-left" />
          {quote}
      <i className="fa fa-quote-right" />
      </div>
      <div id="author" >&mdash; {author}</div>

    </div>
  )
}

export default Quote;