import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import yelp from "../../util/Yelp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  //searchYelp gets the user input and sends a request to the API
  searchYelp(term, location, sortBy) {
    yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({
        businesses: businesses,
      });
    });
  }

  render() {
    return (
      <div>
        <div className="App">
          <h1>iFood</h1>
          <SearchBar searchYelp={this.searchYelp}></SearchBar>
          <BusinessList businesses={this.state.businesses}></BusinessList>
        </div>
      </div>
    );
  }
}

export default App;
