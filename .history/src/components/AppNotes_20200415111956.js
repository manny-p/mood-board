import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

//SearchBar is a composite element

/*
*S1
change component to state
*S2
define callback function / method
*S3 
console log test
*S4
pass method down into the SearchBar as a prop
*/

class App extends Component {
  onSearchSubmit = (term) => {
    console.log(term);
  };

  render() {
    return (
      <div>
        <SearchBar on />
        <ImageList />
      </div>
    );
  }
}

export default App;

// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//       <ImageList />
//     </div>
//   );
// };

// export default App;
