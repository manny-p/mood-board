import React from "react";

const ImageList = props => {
  const images = props.images.map(image => {
    return <img src={image.urls.regular} />;
  });

  return <div>ImageList</div>;
};

export default ImageList;
