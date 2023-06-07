import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "@/lib/movie/popular/fetchApi";
import { setPopular } from "@/store/movie/popular";
import { getTrending } from "@/lib/movie/trending/fetchApi";
import { setTrending } from "@/store/movie/trending";
import { getHorror } from "@/lib/movie/horror/fetchApi";
import { setHorror } from "@/store/movie/horror";
import { getNowPlaying } from "@/lib/movie/playing/fetchApi";
import { setNowPlaying } from "@/store/movie/playing";
import Banner from "./detail/banner";
import Row from "../../components/row";

function FilmPage() {
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

      {/* Carousel: Popular, Trending, Now Playing, Horror */}
      <Row title="Populer di Netflix" data={popular} baseURL={baseUrlBody} />
      <Row title="Sedang Tren Sekarang" data={trending} baseURL={baseUrlBody} />
      <Row title="Lanjutkan Menonton" data={nowPlaying} baseURL={baseUrlBody} />
      <Row title="Film Horor" data={horror} baseURL={baseUrlBody} />
    </div>
  );
}

export default FilmPage;
