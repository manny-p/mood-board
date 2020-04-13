import React, { Component } from "react";

class SearchBar extends Component {
  onInputChange(e) {
    console.log(e.target.value);
  }

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
            onChange={e => this.OnInputChange}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
