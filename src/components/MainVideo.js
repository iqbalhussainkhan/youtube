import React from 'react';

const MainVideo = ({video}) => {
  if(video != null){
    return (
      <div>
      <div className="ui embed">
      <iframe title={video.snippet.title} width="560" height="315" src={`https://www.youtube.com/embed/${video.id.videoId}`} frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
        <div className="ui segment">
          <h3>{video ? video.snippet.title : ''}</h3>
          <p>{video ? video.snippet.description : ''}</p>
        </div>
      </div>
    )
  }else{
    return ''
  }
}

export default MainVideo;
