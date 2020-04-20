import React, { Component } from "react";

class ImageCard extends Component {
  render() {
    const { description, urls } = this.props.image;

    return (
      <div>
        <img
          alt={this.props.image.description}
          src={this.props.image.urls.regualr}
        />
      </div>
    );
  }
}

export default ImageCard;
