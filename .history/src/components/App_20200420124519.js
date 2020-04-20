import React, { Component } from "react";
import unsplash from "../api/unsplash";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import ImageAvatar from "./ImageAvatar";

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
        <PrimarySearchAppBar />
        {/* <ImageAvatar /> */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
