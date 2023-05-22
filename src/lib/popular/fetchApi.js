import { POPULAR_MOVIES } from "@/constans/urlApi";
import axios from "axios";

export const API_KEY = process.env.API_KEY_MOVIE;
export const API_TOKEN = process.env.API_KEY_TOKEN;
export const getPopular = async () => {
  const response = await axios.get(POPULAR_MOVIES, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    params: {
      api_key: API_KEY,
    },
  });
  return response?.data?.results;
};
