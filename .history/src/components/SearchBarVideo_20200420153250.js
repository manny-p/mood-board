import React, { Component } from "react";
import { render } from "@testing-library/react";

class SearchBarVideo extends Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({term: event.targetvalue})
  };

  onFormSubmit = event => {

  }


 
  render() {
    return (
      <div className='ui raised segment'>
    

        render() { 

        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.onInputChange}
              // ! onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
  }
}

export default SearchBarVideo;
