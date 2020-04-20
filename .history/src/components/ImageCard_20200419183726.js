import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load");
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regualr} />
      </div>
    );
  }
}

export default ImageCard;
