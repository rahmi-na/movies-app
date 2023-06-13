import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "@/lib/movie/popular/fetchApi";
import { setPopular } from "@/store/movie/popular";
import { getTrending } from "@/lib/movie/trending/fetchApi";
import { setTrending } from "@/store/movie/trending";
import { getUpcoming } from "@/lib/movie/upcoming/fetchApi";
import { setUpcoming } from "@/store/movie/upcoming";
import { getTrendingTv } from "@/lib/televisi/trending/fetchApi";
import { setTrendingTv } from "@/store/televisi/trending";
import Row from "@/components/Row";
import RowNum from "@/components/RowNum";

function BaruPopularPage() {
  const dispatch = useDispatch();
  const baseURL = "https://image.tmdb.org/t/p/original";
  const baseUrlBody = "https://image.tmdb.org/t/p/w500";
  const { popular } = useSelector((state) => state.popular);
  const { upcoming } = useSelector((state) => state.upcoming);
  const { trending } = useSelector((state) => state.trending);
  const { trendingTv } = useSelector((state) => state.trendingTv);

  useEffect(() => {
    getPopular().then((data) => {
      dispatch(setPopular(data));
    });
    getUpcoming().then((data) => {
      dispatch(setUpcoming(data));
    });
    getTrending().then((data) => {
      dispatch(setTrending(data));
    });
    getTrendingTv().then((data) => {
      dispatch(setTrendingTv(data));
    });
  }, [dispatch]);

  return (
    <div>
      {/* Carousel */}
      <div className="pt-32">
        <Row title="Populer di Netflix" data={popular} baseURL={baseUrlBody} />
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
        <Row
          title="Upcoming di Netflix"
          data={upcoming}
          baseURL={baseUrlBody}
        />
      </div>
    </div>
  );
}

export default BaruPopularPage;
