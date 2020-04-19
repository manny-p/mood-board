import React from "react";

const ImageList = props => {
  const { description, id, regular } = objectToDestruct;

  const images = props.images.map(image => {
    return (
      <img alt={image.description} key={image.id} src={image.urls.regular} />
    );
  });

  return <div>{images}</div>;
};

export default ImageList;
