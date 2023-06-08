import axios from "axios";
import { API_KEY, API_TOKEN, TRENDING_TV } from "@/constans/urlApi";

export const getTrendingTv = async () => {
  const response = await axios.get(TRENDING_TV, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    params: {
      api_key: API_KEY,
    },
  });
  return response?.data?.results;
};
