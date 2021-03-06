import React, { Component } from "react";

class SearchBarVideo extends Component {
  state = { term: "" };

  onInputChange = (event) => {};
  this.ListeningStateChangedEvent({term: event.target})

  /*
  !  onFormSubmit = (e) => {
  !  e.preventDefault();

  !  this.props.onSubmit(this.state.term);
  };


/*

  render() {
    return (
      <div className='ui raised segment'>
        {/* <div className='search-bar ui segment'> */

        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.onInputChange}
              // onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }

export default SearchBarVideo;
