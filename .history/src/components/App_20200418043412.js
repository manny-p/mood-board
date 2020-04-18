import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  onSearchSubmit = term => {
    console.log(term);
    axios.get("https://api.unsplash.com/search/photos", {
      headers: {'Client-ID '
  }
    });
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
