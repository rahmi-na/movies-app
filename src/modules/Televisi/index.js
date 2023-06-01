import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiscoverTv } from "@/lib/discover/fetchApi";
import { setDiscover } from "@/store/discover";
import { getNowPlaying } from "@/lib/playing/fetchApi";
import { setNowPlaying } from "@/store/playing";
import Banner from "./detail/banner";
import Row from "../Home/components/row";
import { data } from "autoprefixer";

function TelevisiPage() {
  const dispatch = useDispatch();
  const baseURL = "https://image.tmdb.org/t/p/original";
  const baseUrlBody = "https://image.tmdb.org/t/p/w500";
  const { discover } = useSelector((state) => state.discover);
  const { nowPlaying } = useSelector((state) => state.nowPlaying);

  useEffect(() => {
    getDiscoverTv().then((data) => {
      dispatch(setDiscover(data));
    });
    getNowPlaying().then((data) => {
      dispatch(setNowPlaying(data));
    });
  }, [dispatch]);

  return (
    <div>
      {/* Banner */}
      <Banner data={discover} baseURL={baseURL} />

      {/* Carousel: Popular, trending */}
      <Row title="Populer di Netflix" data={discover} baseURL={baseUrlBody} />
      <Row title="Sedang Tren Sekarang" data={discover} baseURL={baseUrlBody} />
      <Row title="Film Horor" data={discover} baseURL={baseUrlBody} />
      <Row title="Lanjutkan Menonton" data={nowPlaying} baseURL={baseURL} />
    </div>
  );
}

export default TelevisiPage;
