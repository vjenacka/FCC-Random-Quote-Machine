import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ quote, author, newQuote }) => {
  return (
    <div id="quote-box">
      <div className="quote">
        <i className="fa fa-quote-left" />
        <span id="text">{quote}</span>
      </div>
      <span id="author">- {author}</span>
      <div className="buttons">
        <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">
          <i className="fab fa-twitter-square" />
        </a>
        <span>
          <i className="fab fa-tumblr-square" />
        </span>
        <span id="new-quote" onClick={newQuote}>
          New quote
        </span>
      </div>
    </div>
  );
};

export default QuoteCard;
