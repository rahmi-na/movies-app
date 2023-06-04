import { API_KEY, API_TOKEN, TRENDING_MOVIES } from "@/constans/urlApi";
import axios from "axios";

export const getTrending = async () => {
  const response = await axios.get(TRENDING_MOVIES, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    params: {
      api_key: API_KEY,
    },
  });
  return response?.data?.results;
};
