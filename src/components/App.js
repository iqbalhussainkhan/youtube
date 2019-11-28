import React from 'react';
import SearchBar from './SearchBar';
import MainVideo from './MainVideo';
import VideoList from './VideoList';
import youtube from '.././apis/Youtube';

class App extends React.Component{

  state = {
    videos:[],
    selectedVideo:null
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    })
    this.setState({videos:response.data.items,selectedVideo:response.data.items[0]});
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  render(){
    return(
      <div className="ui container" style={{marginTop:'30px'}}>
          <SearchBar onFormSubmit={this.onTermSubmit}/>
          <p>{this.state.videos.length} Videos</p>
          <div className="ui grid">
            <div className="ten wide column">
                <MainVideo video={this.state.selectedVideo}/>
            </div>
            <div className="four wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
          </div>


      </div>
    )
  }
}

export default App;
