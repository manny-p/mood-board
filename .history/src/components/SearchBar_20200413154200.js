import React, { Component } from "react";

//! Controlled Component

class SearchBar extends Component {
  state = { term: "" };

  //callback
  onFormSubmit(e) {}

  render() {
    return (
      <div>
        {/* event handler prop onSubmit */}
        <form onSubmit={this.onFormSubmit}>
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
