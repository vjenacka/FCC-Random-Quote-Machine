import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ quote, author, newQuote, color }) => {
  return (
    <div id="quote-box">
      <div className="quote">
        <i className={`fa fa-quote-left ${color}-text`}/>
        <span id="text" className={`${color}-text`}>{quote}</span>
      </div>
      <span id="author" className={`${color}-text`}>- {author}</span>
      <div className="buttons">
        <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">
          <i className={`fab fa-twitter-square ${color}-text`} />
        </a>
        <span>
          <i className={`fab fa-tumblr-square ${color}-text`} />
        </span>
        <span id="new-quote" onClick={newQuote} className={`${color}`}>
          New quote
        </span>
      </div>
    </div>
  );
};

export default QuoteCard;
