import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    onInputChange(event) = {};
    return (
      <div>
        <form>
          <input type='text' onChange={this.OnInputChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
