import { API_KEY, API_TOKEN, HORROR_MOVIES } from "@/constans/urlApi";
import axios from "axios";

export const getHorror = async () => {
  const response = await axios.get(HORROR_MOVIES, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    params: {
      api_key: API_KEY,
    },
  });
  return response?.data?.results;
};
