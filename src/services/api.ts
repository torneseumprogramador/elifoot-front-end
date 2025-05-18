import axios from "axios";

// Base API configuration
export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL || ""}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});
