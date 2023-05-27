import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "@/lib/popular/fetchApi";
import { setPopular } from "@/store/popular";
import { getTrending } from "@/lib/trending/fetchApi";
import { setTrending } from "@/store/trending";
import Banner from "./detail/banner";
import Row from "./components/row";

function HomePage() {
  const dispatch = useDispatch();
  const baseURL = "https://image.tmdb.org/t/p/original";
  const { popular } = useSelector((state) => state.popular);
  const { trending } = useSelector((state) => state.trending);

  useEffect(() => {
    getPopular().then((data) => {
      dispatch(setPopular(data));
    });
    getTrending().then((data) => {
      dispatch(setTrending(data));
    });
  }, [dispatch]);

  return (
    <div>
      {/* Banner */}
      <Banner data={popular} baseURL={baseURL} />

      {/* Carousel: Popular, trending */}
      <Row title="Populer di Netflix" data={popular} baseURL={baseURL} />
      <Row title="Sedang Tren Sekarang" data={trending} baseURL={baseURL} />
    </div>
  );
}

export default HomePage;
