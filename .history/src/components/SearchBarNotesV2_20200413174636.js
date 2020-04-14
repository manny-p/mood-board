import React, { Component } from "react";

//! Controlled Component

class SearchBar extends Component {
  state = { term: "" };

  /*

  ! Shorthand syntax
  * onFormSubmit: function(e)
    
    onFormSubmit(e) {
    e.preventDefault();
  }
  */

  //use arrow function to avoid process: define a constructor, bind the function, overwrite existing function
  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.term);
  };

  render() {
    return (
      <div>
        {/* event handler, prop onSubmit */}
        <form onSubmit={this.onFormSubmit}>
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
