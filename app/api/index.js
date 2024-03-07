import axios from "axios";

const dotaApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default dotaApi;
