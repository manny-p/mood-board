import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  render() {
    return (
      <div>
        <form>
          <label>Image Search</label>
          <input
            type='text'
            onChange={e => this.setState({ term: e.target.value })}
            value={console.log(this.state.term)}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
