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
          <div>
            <div className=''>
              <SearchBar onSubmit={this.onSearchSubmit} />
              <div className='ui centered grid'>
                <div>
                  <ImageList images={this.state.images} />
                </div>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}'>
              <SearchBarVideo />
            </div>
            <div className=''>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
