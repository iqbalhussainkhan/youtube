import React from 'react';

class Video extends React.Component {

  selectVideo = (video) => {
      this.props.onVideoSelect(video);
  }
  render(){
    return (
      <div className="item" style={{display:'flex',width:'400px',cursor:'pointer'}}  onClick={this.selectVideo(this.selectVideo)}>
        <img className="ui image" src={this.props.video.snippet.thumbnails.medium.url} alt="video thumbnail" style={{width:'180px',height:'100px'}}/>
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
          <div className="description">{this.props.video.snippet.channelTitle}</div><br/>
          <div className="description">20343 Views</div>
        </div>
      </div>
    )
  }
}

export default Video;
