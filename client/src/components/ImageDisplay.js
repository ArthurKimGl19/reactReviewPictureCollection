//Helper function to convert a url to 400x400.  DO not modify
const convertImageSize = (imageUrl) => {
  let urlArr = imageUrl.split('');
  for (let i = 0; i < urlArr.length; i++) {
    let prev = urlArr[i - 1];
    let curr = urlArr[i];

    if ((prev === 'h' || prev === 'w') && curr === '=') {
      urlArr[i + 1] = '4';
    }
  }
  return urlArr.join('');
}

import React from 'react';

var ImageDisplay = ({ bigPicture }) => {
  return (
    <div id="imageDisplay" className="container">
      {bigPicture.map((bigPic, index) => (
        <img src={bigPic.urls.small} key={index} alt=""/>
      ))}
  </div>   
  )
}

export default ImageDisplay;