import React, { Component } from "react";

class SearchBar extends Component {
  onInputChange(event) {
    console.log(event.target.value);
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
