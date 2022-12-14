import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //term will refer to the search term located in the search input
      term: "",
      //location will refer to the location to search near from the location input
      location: "",
      //sortBy will represent the selected sorting option to use.
      sortBy: "best_match",
    };

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };
  }

  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? "active" : "";
  }

  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption,
    });
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value,
    });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value,
    });
  }

  handleSearch(event) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((key) => {
      let sortByOptionValue = this.sortByOptions[key];
      return (
        <li
          className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {key}
        </li>
      );
    });
  }
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            onChange={this.handleTermChange}
            placeholder="Search business. Ex.: Mexican, Sushi, Italian.."
          />
          <input
            onChange={this.handleLocationChange}
            placeholder="Where? Ex.: Vancouver, Seattle, Toronto..."
          />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch} href="/#">
            Let's Go
          </a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
