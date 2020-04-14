import React, { Component } from "react";

//! Controlled Component

class SearchBar extends Component {
  state = { term: "" };

  //* Shorthand syntax
  //onFormSubmit: function(e)
  onFormSubmit(e) {
    e.preventDefault();

    console.log(this.state.term);
  }

  onFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        {/* event handler, prop onSubmit */}
        <form onSubmit={this.onFormSubmit}>
          {/* onFormSubmit is a callback method */}
          <label>Image Search</label>
          <input
            type='text'
            value={console.log(this.state.term)}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
