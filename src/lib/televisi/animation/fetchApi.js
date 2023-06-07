import axios from "axios";
import { API_KEY, API_TOKEN, ANIMATION_TV } from "@/constans/urlApi";

export const getAnimationTv = async () => {
  const response = await axios.get(ANIMATION_TV, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    params: {
      api_key: API_KEY,
    },
  });
  return response?.data?.results;
};
