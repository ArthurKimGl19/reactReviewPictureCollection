import React from 'react';
import ImageFetcher from './ImageFetcher.js';
import ImageDisplay from './ImageDisplay.js';
import Collection from './Collection.js';
import Axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mockCollection: [],
      bigPicture: []
    }
    this.handleClickImageFetcher = this.handleClickImageFetcher.bind(this);
    this.get = this.get.bind(this);
  }
  handleClickImageFetcher(e){
    var buttonClicked = e.target.id;
    this.get(buttonClicked);
  }
  get(buttonClicked){
    var api = '';
    Axios.get(`https://api.unsplash.com/search/photos?page=1&query=${buttonClicked}&per_page=6&client_id=${api}`)
      .then(({ data }) =>{
        this.setState({
          mockCollection: data.results.slice(1),
          bigPicture: data.results.slice(0,1)
        }, () => {console.log('mockC bigPic', this.state.mockCollection, this.state.bigPicture)})
      })
      .catch((err) => {
        console.log('Failed get, error:', err)
      })
  }
  componentDidMount(){
    this.get('cats');
  }
  render() {
    var { mockOptions } = this.props;
    return (
      <div id="mainApp">
        <ImageFetcher mockOptions={mockOptions} handleClickImageFetcher={this.handleClickImageFetcher}/>
      <div className="collectionRow">
        <ImageDisplay bigPicture={this.state.bigPicture}/>
        <Collection mockCollection={this.state.mockCollection}/>
      </div>
    </div>     
    )
  }
}
export default App;