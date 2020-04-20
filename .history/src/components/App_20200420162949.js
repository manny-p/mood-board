import React, { Component } from "react";
import unsplash from "../api/unsplash";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import SearchBar from "./SearchBar";
import SearchBarVideo from "./SearchBarVideo";
import ImageList from "./ImageList";
import Footer from "./Footer";

class App extends Component {
  state = { images: [] };


//*Search Images
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };
  


  //*Search Videos
  onTermSubmit = (term) => {
    console.log(term)

  };


  render() {
    return (
      <div>
        <PrimarySearchAppBar />
        <div className='ui container' style={{ marginTop: "50px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
          <div style={{ marginTop: "20px" }}>
            <SearchBarVideo onFormSubmit={this.onTermSubmit/>
          </div>
          <div style={{ marginTop: "35px" }}>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
