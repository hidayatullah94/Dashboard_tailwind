import axios from "axios";

export const URLS = axios.create({
  baseURL: "http://localhost:8000",
});
