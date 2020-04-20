import React, { Component } from "react";

class ImageCard extends Component {
  render() {
    const { description, urls } = this.props.image;

    return (
      <div>
        <img alt={description} src={urls.regualr} />
      </div>
    );
  }
}

export default ImageCard;
