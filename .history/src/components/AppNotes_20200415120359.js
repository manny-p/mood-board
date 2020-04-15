import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

//TODO Invoke Callbacks from Parent to Child

/* Composite Elements 
User Generated 
e.g. SearchBar 
*/

/* Composite Properties

Possess unrestricted naming conventions 

e.g. 'onSubmit' is not a required naming convention

<SearchBar onSubmit={}/> 

*/

/* Process 
*S1
change component to state
*S2
define callback-function/method onSearchSubmit, pass Search 'term' 
*S3 
console log test
*S4
pass method down into the SearchBar as a prop
*S5 
pass props to <SearchBar> onFormSubmit to gain access to <App /> callback-function onSubmit={this.onSearchSubmit}

*SearchBar.js

onFormSubmit = (e) => {
    e.preventDefault();

    *this.props.onSubmit(this.state.term)
    // console.log(this.state.term);
  };

*/

class App extends Component {
  onSearchSubmit = (term) => {
    console.log(term);
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList />
      </div>
    );
  }
}

export default App;
