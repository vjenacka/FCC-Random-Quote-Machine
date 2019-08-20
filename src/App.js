import React from "react";
import QuoteCard from "./components/QuoteCard/QuoteCard";

class App extends React.Component {
  state = {
    quotes: [],
    quote: "",
    author: "",
    isFetched: false
  };
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(resp => {
        return resp.json();
      })
      .then(jsonResp => {
        const quoteIndex = Math.floor(Math.random() * 102);
        this.setState({
          quotes: jsonResp.quotes,
          quote: jsonResp.quotes[quoteIndex].quote,
          author: jsonResp.quotes[quoteIndex].author,
          isFetched: !this.state.isFetched
        });
      });
  }
  newQuote = () => {
    const quoteIndex = Math.floor(Math.random() * 102);
    this.setState({
      quote: this.state.quotes[quoteIndex].quote,
      author: this.state.quotes[quoteIndex].author
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.isFetched && (
          <QuoteCard
            quote={this.state.quote}
            author={this.state.author}
            newQuote={this.newQuote}
          />
        )}
      </div>
    );
  }
}

export default App;
