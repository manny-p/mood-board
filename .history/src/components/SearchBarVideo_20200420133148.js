import React, { Component } from "react";

class SearchBarVideo extends Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        {/* <div className='ui raised segment'> */}
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Search Video</label>
            <input
              type='text'
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBarVideo;
