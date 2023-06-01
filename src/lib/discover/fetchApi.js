import axios from "axios";
import { API_KEY, API_TOKEN, TV_DISCOVER } from "@/constans/urlApi";

export const getDiscoverTv = async () => {
  const response = await axios.get(TV_DISCOVER, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    params: {
      api_key: API_KEY,
    },
  });
  return response?.data?.results;
};
