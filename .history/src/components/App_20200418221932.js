import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  async onSearchSubmit(term) {
    const response = await axios;.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID _OQEJx5-LakZ0KO9tn7-P4BMJ6Puozi32r3_LG3hTX8"
      }
    })
    console.log(response.data.results);
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
