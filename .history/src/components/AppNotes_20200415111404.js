import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

//* S1
//change component to state
//* S2
//define callback function
//*S3

class App extends Component {
  onSearchSubmit = () => {};

  render() {
    return (
      <div>
        {/*SearchBar is a composite element */}
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
