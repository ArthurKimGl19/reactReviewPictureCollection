import React from 'react';

var ImageFetcher = ({ mockOptions, handleClickImageFetcher }) => {
    return (
      <div className="container">
      {mockOptions.map((option, index) => {
        return (
          <button id={option} key={index} onClick={handleClickImageFetcher}>{option}</button>
        )
      }
      )}
    </div>
    )
}
export default ImageFetcher;