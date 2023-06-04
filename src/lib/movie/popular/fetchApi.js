import { API_KEY, API_TOKEN, POPULAR_MOVIES } from "@/constans/urlApi";
import axios from "axios";

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
