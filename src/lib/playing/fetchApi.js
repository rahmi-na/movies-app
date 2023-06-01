import { API_KEY, API_TOKEN, NOW_PLAYING_MOVIES } from "@/constans/urlApi";
import axios from "axios";

export const getNowPlaying = async () => {
  const response = await axios.get(NOW_PLAYING_MOVIES, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    params: {
      api_key: API_KEY,
    },
  });
  return response?.data?.results;
};
