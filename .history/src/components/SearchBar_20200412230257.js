import React, { Component } from "react";

class SearchBar extends Component {
  onInputClick(e) {
    console.log("Input was clicked");
  }

  render() {
    return (
      <div>
        <form>
          <label>Image Search</label>
          <input
            type='text'
            onClick={this.onInputClick}
            onChange={e => console.log(e.target.value)}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
