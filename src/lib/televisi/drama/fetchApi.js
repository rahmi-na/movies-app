import axios from "axios";
import { API_KEY, API_TOKEN, DRAMA_TV } from "@/constans/urlApi";

export const getDramaTv = async () => {
  const response = await axios.get(DRAMA_TV, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    params: {
      api_key: API_KEY,
    },
  });
  return response?.data?.results;
};
