import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Image Search</label>
          <input type='text' onChange={e => console.log(e.target.value)} />
        </form>
      </div>
    );
  }
}
export default SearchBar;
