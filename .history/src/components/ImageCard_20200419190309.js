import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 150 + 1);

    this.setState({ spans });
  };

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
