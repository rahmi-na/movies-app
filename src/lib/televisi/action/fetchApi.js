import axios from "axios";
import { API_KEY, API_TOKEN, ACTION_TV } from "@/constans/urlApi";

export const getActionTv = async () => {
  const response = await axios.get(ACTION_TV, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    params: {
      api_key: API_KEY,
    },
  });
  return response?.data?.results;
};
