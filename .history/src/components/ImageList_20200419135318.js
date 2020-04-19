import React from "react";

const ImageList = props => {
  props.images.map(image => {
    return <div>{image}</div>;
  });
  return <div>ImageList</div>;
};

export default ImageList;
