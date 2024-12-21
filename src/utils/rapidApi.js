import axios from 'axios';

const api_key = import.meta.env.VITE_API_KEY;
const base_url = 'https://www.googleapis.com/youtube/v3/videos';

export const fetchVideoById = async (videoId) => {
  const options = {
    method: 'GET',
    url: base_url,
    params: {
      part: 'snippet',
      id: videoId,
      key: api_key
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
  }
};
