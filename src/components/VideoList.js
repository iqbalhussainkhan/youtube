import React from 'react';
import Video from './Video';

const VideoList = ({videos,onVideoSelect}) => {
  console.log(onVideoSelect)
  const renderedVideos = videos.map((video,i) => {
      return <Video key={i} video={video} onVideoSelect = {onVideoSelect}/>;
    });

  return (
    <div className="ui relaxed divided list">
      {renderedVideos}
    </div>
  )
}

export default VideoList;
