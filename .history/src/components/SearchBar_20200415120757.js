import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
    // props object: calls function that is passed through as onSubmit prop
    // onSubmit={this.onSearchSubmit}

    //function is invoked with this.state.term
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Image Search</label>
          <input
            type='text'
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
