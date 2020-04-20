import axios from "axios";

const KEY = "AIzaSyD9aBmzhmrvBQE59b5TEcbF0tRr5xI6M2I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
