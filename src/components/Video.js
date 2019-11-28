import React from 'react';

const Video = ({video, onVideoSelect}) => {

console.log(video)
    return (
      <div className="item" style={{display:'flex',width:'400px',cursor:'pointer'}}  onClick={() => onVideoSelect(video)}>
        <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="video thumbnail" style={{width:'180px',height:'100px'}}/>
        <div className="content">
          <div className="header">{video ? video.snippet.title : '' }</div>
          <div className="description">{video ? video.snippet.channelTitle : ''}</div><br/>
          <div className="description">20343 Views</div>
        </div>
      </div>
    )
}

export default Video;
