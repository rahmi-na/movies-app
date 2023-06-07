import axios from "axios";
import { API_KEY, API_TOKEN, CRIME_TV } from "@/constans/urlApi";

export const getCrimeTv = async () => {
  const response = await axios.get(CRIME_TV, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    params: {
      api_key: API_KEY,
    },
  });
  return response?.data?.results;
};
