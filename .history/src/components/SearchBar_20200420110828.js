import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment' style={{ color: "@red" }}>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Search</label>
            <input
              type='text'
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
