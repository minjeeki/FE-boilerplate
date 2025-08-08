import axios from "axios";

// check baseURL is empty (if you set baseURL in .env, erase this code)
const baseURL = import.meta.env.VITE_API_BASE_URL;
if (!baseURL && import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.warn("[axios] VITE_API_BASE_URL is empty");
}

// axios instance
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});
