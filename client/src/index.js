import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

import { mockCollection, bigCollectionImage }from './data/exampleImageData.js';
import mockOptions from './data/exampleOptions.js';

//render your application
ReactDOM.render(<App bigPicture={bigCollectionImage} mockCollection={mockCollection} mockOptions={mockOptions}/>, document.getElementById('app'))