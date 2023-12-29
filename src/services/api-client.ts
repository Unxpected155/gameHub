import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "459113f8e1524635b892e6f0ccb35204",
  },
});
