import axios from 'axios';


  const KEY = 'AIzaSyDWPtvLyIvEz6izF0N0Rs6AS9ppjhjnDtM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
      part:'snippet',
      maxResults: 10,
      key: KEY
  }
});
