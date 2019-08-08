import React from 'react';
import CollectionItem from './CollectionItem.js';

var Collection = ({ mockCollection }) => {
  console.log('inside mock collection', mockCollection)
  return (
    <div className="container" id="collection">
      {mockCollection.map((mockCollection, index) => {
        return (
          <CollectionItem key={index} mockCollection={mockCollection.urls.thumb}/>
        )
      })}

    </div>    
  )
}

export default Collection;