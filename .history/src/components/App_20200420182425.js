import React, { Component } from "react";
import unsplash from "../api/unsplash";
import youtube from "../api/youtube";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import SearchBar from "./SearchBar";
import SearchBarVideo from "./SearchBarVideo";
import ImageList from "./ImageList";
import Footer from "./Footer";
import VideoList from "./VideoList";

class App extends Component {
  state = {
    images: [],
    videos: []
  };

  //*Search Images
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  //*Search Videos
  onTermSubmit = async term => {
    // console.log(term);
    const repsonse = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: "AIzaSyD9aBmzhmrvBQE59b5TEcbF0tRr5xI6M2I"
      }
      
      this.setState({videos: response.data.items});
    });
  };

  render() {
    return (
      <div>
        <PrimarySearchAppBar />
        <div className='ui container' style={{ marginTop: "50px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
          <div style={{ marginTop: "20px" }}>
            <SearchBarVideo onFormSubmit={this.onTermSubmit} />
            <VideoList />
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
