import React, { Component } from "react";

class SearchBar extends Component {
  onInputChange(event) = {
    console.log('');
  };
  render() {
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
