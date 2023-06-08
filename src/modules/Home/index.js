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
import { getTrendingTv } from "@/lib/televisi/trending/fetchApi";
import { setTrendingTv } from "@/store/televisi/trending";
import { getDramaTv } from "@/lib/televisi/drama/fetchApi";
import { setDramaTv } from "@/store/televisi/drama";
import Banner from "./detail/banner";
import Row from "@/components/Row";
import RowNum from "@/components/RowNum";

function HomePage() {
  const dispatch = useDispatch();
  const baseURL = "https://image.tmdb.org/t/p/original";
  const baseUrlBody = "https://image.tmdb.org/t/p/w500";
  const { popular } = useSelector((state) => state.popular);
  const { trending } = useSelector((state) => state.trending);
  const { horror } = useSelector((state) => state.horror);
  const { nowPlaying } = useSelector((state) => state.nowPlaying);
  const { dramaTv } = useSelector((state) => state.dramaTv);
  const { trendingTv } = useSelector((state) => state.trendingTv);

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
    getDramaTv().then((data) => {
      dispatch(setDramaTv(data));
    });
    getTrendingTv().then((data) => {
      dispatch(setTrendingTv(data));
    });
  }, [dispatch]);

  return (
    <div>
      {/* Banner */}
      <Banner data={popular} baseURL={baseURL} />

      {/* Carousel */}

      <Row title="Lanjutkan Menonton" data={nowPlaying} baseURL={baseUrlBody} />
      <Row title="Sedang Tren Sekarang" data={popular} baseURL={baseUrlBody} />
      <Row title="Acara TV Drama Barat" data={dramaTv} baseURL={baseUrlBody} />
      <RowNum
        title="10 Film Teratas Hari Ini"
        data={trending}
        baseURL={baseURL}
      />
      <RowNum
        title="10 Acara TV Teratas Hari Ini"
        data={trendingTv}
        baseURL={baseURL}
      />
      <Row title="Lanjutkan Menonton" data={nowPlaying} baseURL={baseUrlBody} />
      <Row title="Film Horor" data={horror} baseURL={baseUrlBody} />
    </div>
  );
}

export default HomePage;
