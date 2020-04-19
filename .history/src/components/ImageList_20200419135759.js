import React from "react";

const ImageList = props => {
  props.images.map(image => {
    return <div>{image}</div>;
  });
};

export default ImageList;
