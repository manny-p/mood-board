import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" }
  console.log(this.state.term);

  render() {
    return (
      <div>
        <form>
          <label>Image Search</label>
          <input
            type='text'
            onChange={e => this.setState({ term: e.target.value })}
            value={this.state.term}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
