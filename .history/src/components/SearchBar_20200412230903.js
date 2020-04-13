import React, { Component } from "react";
state = { term: "" };

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Image Search</label>
          <input type='text'
          onChange={(e)=>(this.setState({term:e.target.value}))
        </form>
      </div>
    );
  }
}
export default SearchBar;
