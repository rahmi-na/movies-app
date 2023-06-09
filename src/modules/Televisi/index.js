import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularTv } from "@/lib/televisi/popular/fetchApi";
import { setPopularTv } from "@/store/televisi/popular";
import { getTrendingTv } from "@/lib/televisi/trending/fetchApi";
import { setTrendingTv } from "@/store/televisi/trending";
import { getNowPlaying } from "@/lib/movie/playing/fetchApi";
import { setNowPlaying } from "@/store/movie/playing";
import { getActionTv } from "@/lib/televisi/action/fetchApi";
import { setActionTv } from "@/store/televisi/action";
import { getCrimeTv } from "@/lib/televisi/crime/fetchApi";
import { setCrimeTv } from "@/store/televisi/crime";
import { getAnimationTv } from "@/lib/televisi/animation/fetchApi";
import { setAnimationTv } from "@/store/televisi/animation";
import { getMysteryTv } from "@/lib/televisi/mystery/fetchApi";
import { setMysteryTv } from "@/store/televisi/mystery";
import { getDramaTv } from "@/lib/televisi/drama/fetchApi";
import { setDramaTv } from "@/store/televisi/drama";
import Banner from "./detail/banner";
import Row from "@/components/Row";
import RowNum from "@/components/RowNum";

function TelevisiPage() {
  const dispatch = useDispatch();
  const about = "Acara TV";
  const baseURL = "https://image.tmdb.org/t/p/original";
  const baseUrlBody = "https://image.tmdb.org/t/p/w500";
  const { popularTv } = useSelector((state) => state.popularTv);
  const { trendingTv } = useSelector((state) => state.trendingTv);
  const { nowPlaying } = useSelector((state) => state.nowPlaying);
  const { actionTv } = useSelector((state) => state.actionTv);
  const { crimeTv } = useSelector((state) => state.crimeTv);
  const { animationTv } = useSelector((state) => state.animationTv);
  const { mysteryTv } = useSelector((state) => state.mysteryTv);
  const { dramaTv } = useSelector((state) => state.dramaTv);

  useEffect(() => {
    getPopularTv().then((data) => {
      dispatch(setPopularTv(data));
    });
    getTrendingTv().then((data) => {
      dispatch(setTrendingTv(data));
    });
    getNowPlaying().then((data) => {
      dispatch(setNowPlaying(data));
    });
    getActionTv().then((data) => {
      dispatch(setActionTv(data));
    });
    getCrimeTv().then((data) => {
      dispatch(setCrimeTv(data));
    });
    getAnimationTv().then((data) => {
      dispatch(setAnimationTv(data));
    });
    getMysteryTv().then((data) => {
      dispatch(setMysteryTv(data));
    });
    getDramaTv().then((data) => {
      dispatch(setDramaTv(data));
    });
  }, [dispatch]);

  return (
    <div>
      {/* Banner */}
      <Banner data={trendingTv} baseURL={baseURL} />

      {/* Carousel */}
      <RowNum
        title="10 Acara TV Teratas Hari Ini"
        data={trendingTv}
        baseURL={baseURL}
      />
      <Row
        title="Sedang Tren Sekarang"
        data={popularTv}
        baseURL={baseUrlBody}
      />
      <Row title="Lanjutkan Menonton" data={nowPlaying} baseURL={baseUrlBody} />
      <Row title="Drama Korea" data={dramaTv} baseURL={baseUrlBody} />
      <Row
        title="Laga & Petualangan TV"
        data={actionTv}
        baseURL={baseUrlBody}
      />
      <Row
        title={`${about} Animasi`}
        data={animationTv}
        baseURL={baseUrlBody}
      />
      <Row title={`${about} Misteri`} data={mysteryTv} baseURL={baseUrlBody} />
      <Row title={`${about} Kriminal`} data={crimeTv} baseURL={baseUrlBody} />
    </div>
  );
}

export default TelevisiPage;
