import React, { Component } from "react";
import unsplash from "../api/unsplash";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import SearchBar from "./SearchBar";
import SearchBarVideo from "./SearchBarVideo";
import ImageList from "./ImageList";
import Footer from "./Footer";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    // debugger;
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // debugger;
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <PrimarySearchAppBar />

        <div className='ui container' style={{ marginTop: "20px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>

        <div style={{ marginTop: "50px" }}>
          <SearchBarVideo />
        </div>

        <div style={{ marginTop: "33vh" }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
