import axios from "axios";
import { API_KEY, API_TOKEN, POPULAR_TV } from "@/constans/urlApi";

export const getPopularTv = async () => {
  const response = await axios.get(POPULAR_TV, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    params: {
      api_key: API_KEY,
    },
  });
  return response?.data?.results;
};
