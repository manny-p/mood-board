import React, { Component } from "react";

class SearchBar extends Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <label>Image Search</label>
          <input type='text' onChange={e => this.OnInputChange(e)} />
        </form>
      </div>
    );
  }
}
export default SearchBar;
