import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiscoverTv } from "@/lib/discover/fetchApi";
import { setDiscover } from "@/store/televisi/discover";
import { getNowPlaying } from "@/lib/playing/fetchApi";
import { setNowPlaying } from "@/store/movie/playing";
import { getActionTv } from "@/lib/action/fetchApi";
import action, { setActionTv } from "@/store/televisi/action";
import Banner from "./detail/banner";
import Row from "../../components/row";

function TelevisiPage() {
  const dispatch = useDispatch();
  const baseURL = "https://image.tmdb.org/t/p/original";
  const baseUrlBody = "https://image.tmdb.org/t/p/w500";
  const { nowPlaying } = useSelector((state) => state.nowPlaying);
  const { action } = useSelector((state) => state.action);
  const { discover } = useSelector((state) => state.discover);

  useEffect(() => {
    getNowPlaying().then((data) => {
      dispatch(setNowPlaying(data));
    });
    getActionTv().then((data) => {
      dispatch(setActionTv(data));
    });
    getDiscoverTv().then((data) => {
      dispatch(setDiscover(data));
    });
  }, [dispatch]);

  return (
    <div>
      {/* Banner */}
      <Banner data={discover} baseURL={baseURL} />

      {/* Carousel: Popular, trending */}
      <Row title="Sedang Tren Sekarang" data={discover} baseURL={baseUrlBody} />
      <Row title="Lanjutkan Menonton" data={nowPlaying} baseURL={baseUrlBody} />
      <Row title="Laga & Petualangan TV" data={action} baseURL={baseUrlBody} />
      <Row title="Film Horor" data={discover} baseURL={baseUrlBody} />
    </div>
  );
}

export default TelevisiPage;
