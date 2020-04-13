import React, { Component } from "react";

class SearchBar extends Component {
  onInputChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <label>Image Search</label>
          <input type='text' value={e} onChange={e => this.OnInputChange} />
        </form>
      </div>
    );
  }
}
export default SearchBar;
