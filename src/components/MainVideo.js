import React from 'react';

const MainVideo = ({video}) => {
  if(video != null){
    return (
      <div>
        <div class="ui segment">
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
