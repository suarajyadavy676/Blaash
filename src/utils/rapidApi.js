import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY;
const base_url = import.meta.env.VITE_API_BASE_URL;

export const fetchData = async () => {
  const options = {
    method: 'GET',
    url: base_url,
    params: {
      part: 'snippet,replies',       // Request snippet and replies for comments
      videoId: '_VB39Jo8mAQ',        // Video ID (replace with your actual video ID)
      maxResults: '20',              // Limit results to 20
      order: 'time',                 // Order comments by time
      textFormat: 'html'             // Request comments in HTML format
    },
    headers: {
      'x-rapidapi-key': api_key,     // Use your RapidAPI key
      'x-rapidapi-host': 'youtube342.p.rapidapi.com'  // Correct RapidAPI host
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error.response?.data || error.message);
  }
};
