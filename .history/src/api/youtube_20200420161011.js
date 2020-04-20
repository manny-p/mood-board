import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

const KEY = "AIzaSyD9aBmzhmrvBQE59b5TEcbF0tRr5xI6M2I";


onTermSubmit = async term => {
  const response = await youtube.get("/search", {
    params: {
      q: term,
      part: "snippet",
      maxResults: 5,
      type: 'video',
      key: "AIzaSyD9aBmzhmrvBQE59b5TEcbF0tRr5xI6M2I"
    }
  });