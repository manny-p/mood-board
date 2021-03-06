import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from @material-ui/core/Toolbar
import unsplash from "../api/unsplash";
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
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
    debugger;
  }
}

export default App;
