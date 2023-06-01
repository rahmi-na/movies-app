import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "@/lib/popular/fetchApi";
import { setPopular } from "@/store/popular";
import { getTrending } from "@/lib/trending/fetchApi";
import { setTrending } from "@/store/trending";
import { getHorror } from "@/lib/horror/fetchApi";
import { setHorror } from "@/store/horror";
import { getNowPlaying } from "@/lib/playing/fetchApi";
import { setNowPlaying } from "@/store/playing";
import Banner from "./detail/banner";
import Row from "./components/row";
import { data } from "autoprefixer";

function HomePage() {
  const dispatch = useDispatch();
  const baseURL = "https://image.tmdb.org/t/p/original";
  const baseUrlBody = "https://image.tmdb.org/t/p/w500";
  const { popular } = useSelector((state) => state.popular);
  const { trending } = useSelector((state) => state.trending);
  const { horror } = useSelector((state) => state.horror);
  const { nowPlaying } = useSelector((state) => state.nowPlaying);

  useEffect(() => {
    getPopular().then((data) => {
      dispatch(setPopular(data));
    });
    getTrending().then((data) => {
      dispatch(setTrending(data));
    });
    getHorror().then((data) => {
      dispatch(setHorror(data));
    });
    getNowPlaying().then((data) => {
      dispatch(setNowPlaying(data));
    });
  }, [dispatch]);

  return (
    <div>
      {/* Banner */}
      <Banner data={popular} baseURL={baseURL} />

      {/* Carousel: Popular, Trending, Horror, Now Playing */}
      <Row title="Populer di Netflix" data={popular} baseURL={baseUrlBody} />
      <Row title="Sedang Tren Sekarang" data={trending} baseURL={baseUrlBody} />
      <Row title="Film Horor" data={horror} baseURL={baseUrlBody} />
      <Row title="Lanjutkan Menonton" data={nowPlaying} baseURL={baseURL} />
    </div>
  );
}

export default HomePage;
