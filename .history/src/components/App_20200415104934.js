import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ImageList />
      </div>
    );
  }
}

export default App;
