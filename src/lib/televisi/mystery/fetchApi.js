import axios from "axios";
import { API_KEY, API_TOKEN, MYSTERY_TV } from "@/constans/urlApi";

export const getMysteryTv = async () => {
  const response = await axios.get(MYSTERY_TV, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    params: {
      api_key: API_KEY,
    },
  });
  return response?.data?.results;
};
