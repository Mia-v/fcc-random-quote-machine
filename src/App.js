import React from 'react';
import './App.scss';
import { QuoteContainer } from './containers/quote-container/QuoteContainer';

function App() {

  const  state = [
    ["Me fail English? That's unpossible.", "Ralph Wiggum"],
    [
      "I’d rather let a thousand guilty men go free than chase after them.",
      "Chief Wiggum"
    ],
    [
      "Shoplifting is a victimless crime. Like punching someone in the dark",
      "Nelson Muntz"
    ],
    [
      "Skinner said the teachers will crack any minute Purple Monkey Dishwasher.",
      "Principal Skinner"
    ],
    [
      "This anonymous clan of slack-jawed troglodytes has cost me the election. And yet, if I were to have them killed, I would be the one to go to jail. That’s democracy for you.",
      "Mr. Burns"
    ],
    ["Everything’s coming up Milhouse!", "Milhouse Van Houten"],
    ["My eyes! The goggles do nothing!", "Radioactive Man"],
    ['I call the big one "Bitey"', "Homer Simpson"],
    [
      "To alcohol! The cause of... and solution to... all of life's problems.",
      "Homer Simpson"
    ],
    ["D'Oh!", "Homer Simpson"],
    ["Woo-Hoo!", "Homer Simpson"],
    [
      "Kids, you tried your best and you failed miserably. The lesson is, never try.",
      "Homer Simpson"
    ],
    [
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
      "Homer Simpson"
    ],
    ["I am so smart! I am so smart! S-M-R-T! I mean S-M-A-R-T!", "Homer Simpson"],
    [
      "I've got a problem. As soon as you stop this car, I'm gonna hug you, and kiss you, and then I'll never be able to let you go!",
      "Homer Simpson"
    ]
  ];
  

  return (
    <div className="App">
      <QuoteContainer state = {state}/>
    </div>
  )
}

export default App;