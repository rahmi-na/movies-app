import { API_KEY, API_TOKEN, UPCOMING_MOVIES } from "@/constans/urlApi";
import axios from "axios";

export const getUpcoming = async () => {
  const response = await axios.get(UPCOMING_MOVIES, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    params: {
      api_key: API_KEY,
    },
  });
  return response?.data?.results;
};
