import React, { Component } from "react";

class SearchBar extends Component {
  onInputChange(e) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <label>Image Search</label>
          <input type='text' onChange={e => this.OnInputChange} />
        </form>
      </div>
    );
  }
}
export default SearchBar;
