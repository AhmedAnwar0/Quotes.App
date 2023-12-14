// Array [Quotes]
// Function on Click Generate A Random Number
// Check If The Number Equals The Number

let quotes = [
  [`“Be yourself; everyone else is already taken.”`, `― Oscar Wilde`],
  [
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    `― Albert Einstein`,
  ],
  [`“So many books, so little time.”`, `― Frank Zappa`],
  [`“A room without books is like a body without a soul.”`,`― Marcus Tullius Cicero`],
  [`“You only live once, but if you do it right, once is enough.”`,`― Mae West`],
  [`“Be the change that you wish to see in the world.”`,`― Mahatma Gandhi`]
];
let lastQuote ='';

function randomeQoutes() {
    let randomQoute = Math.floor(Math.random()*quotes.length)
  // Validation
    while(quotes[randomQoute] === lastQuote) {
       randomQoute = Math.floor(Math.random()*quotes.length)
    }
    lastQuote = quotes[randomQoute]
    document.getElementById('quote').innerHTML = quotes[randomQoute][0];
    document.getElementById('auther').innerHTML = quotes[randomQoute][1];
}



