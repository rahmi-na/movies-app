import { API_KEY, API_TOKEN, DISCOVER_MOVIES } from "@/constans/urlApi";
import axios from "axios";

export const getDiscover = async (language) => {
  const params = {
    api_key: API_KEY,
    with_original_language: language || "",
  };

  const response = await axios.get(DISCOVER_MOVIES, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    params: params,
  });

  return response?.data?.results;
};
