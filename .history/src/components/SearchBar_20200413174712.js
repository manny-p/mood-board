import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  
  onFormSubmit(e) {
    e.preventDefault();
  }

  console.log(this.state.term);
  
  render() {
    return (
      <div>
        
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          {/* onFormSubmit is a callback method */}
          <label>Image Search</label>
          <input
            type='text'
            value={console.log(this.state.term)}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
