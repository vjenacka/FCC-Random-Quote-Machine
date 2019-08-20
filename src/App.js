import React from "react";
import QuoteCard from "./components/QuoteCard/QuoteCard";

class App extends React.Component {
  state = {
    colorArr: [
      "red",
      "pink",
      "purple",
      "deep-purple",
      "indigo",
      "blue",
      "light-blue",
      "cyan",
      "teal",
      "green",
      "orange",
      "amber",
      'grey',
      'deep-orange'
    ],
    quotes: [],
    quote: "",
    author: "",
    isFetched: false,
    color: ""
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
        const randomColor=  Math.floor(Math.random() * 13);
        this.setState({
          quotes: jsonResp.quotes,
          quote: jsonResp.quotes[quoteIndex].quote,
          author: jsonResp.quotes[quoteIndex].author,
          isFetched: !this.state.isFetched,
          color:this.state.colorArr[randomColor]
        });
      });
  }
  newQuote = () => {
    const quoteIndex = Math.floor(Math.random() * 102);
    const randomColor=  Math.floor(Math.random() * 13);
    this.setState({
      quote: this.state.quotes[quoteIndex].quote,
      author: this.state.quotes[quoteIndex].author,
      color:this.state.colorArr[randomColor]
    });
  };
  render() {
    return (
      <div className={`App ${this.state.color}`}>
        {this.state.isFetched && (
          <QuoteCard
            quote={this.state.quote}
            author={this.state.author}
            newQuote={this.newQuote}
            color={this.state.color}
          />
        )}
      </div>
    );
  }
}

export default App;
