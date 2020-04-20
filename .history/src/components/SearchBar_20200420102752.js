import React, { Component } from "react";

class AppBar extends Component {
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
            <label>Discover</label>
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
export default AppBar;
