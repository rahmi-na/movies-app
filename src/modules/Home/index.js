import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "@/lib/popular/fetchApi";
import { setPopular } from "@/store/popular";
import { getTrending } from "@/lib/trending/fetchApi";
import { setTrending } from "@/store/trending";
import Banner from "./detail/banner";
import Popular from "./detail/popular";
import { data } from "autoprefixer";

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
      {popular?.length
        ? popular.slice(3, 4).map((item, idx) => {
            const Image = baseURL + item?.backdrop_path;
            console.log(Image);
            return (
              <div key={idx}>
                <Banner
                  title={item?.original_title}
                  image={Image}
                  overview={item?.overview}
                />
              </div>
            );
          })
        : "Not data files"}

      {/* <Banner baseURL={baseURL} data={popular} /> */}

      {/* Carousel: Popular */}
      {/* {popular && popular.length ? (
        <Popular data={popular} baseURL={baseURL} />
      ) : (
        <div>Popular data not available</div>
      )} */}
    </div>
  );
}

export default HomePage;
