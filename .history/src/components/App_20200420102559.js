import React, { Component } from "react";
import unsplash from "../api/unsplash";
import AppBar from "./AppBar";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    // debugger;
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    // debugger;
    this.setState({ images: response.data.results });
  };

  render() {
    debugger;
    return (
      <div className='ui container' style={{ marginTop: "20px" }}>
        <AppBar />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
    debugger;
  }
}

export default App;
