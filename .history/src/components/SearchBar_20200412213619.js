import React, { Component } from "react";

class SearchBar extends Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

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
            //TODO refactor
            //*v1
            //onChange={this.onInputChange}
            //*v2
            //onChange={event => console.log(event.target.value)}
            onChange={e => console.log(event.target.value)}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
