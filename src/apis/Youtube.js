import axios from 'axios';


  const KEY = 'AIzaSyCLXbU2ctawvJVXsXHchrviqVXR7dCCl6M';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
      part:'snippet',
      maxResults: 10,
      key: KEY
  }
});
