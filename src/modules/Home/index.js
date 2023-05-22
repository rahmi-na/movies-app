import { getPopular } from "@/lib/popular/fetchApi";
import { setPopular } from "@/store/popular";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./detail/banner";
import UpComing from "./detail/upcoming";

function HomePage() {
  const dispatch = useDispatch();
  const baseURL = "https://image.tmdb.org/t/p/original";
  const { popular } = useSelector((state) => state.popular);

  useEffect(() => {
    getPopular().then((data) => {
      dispatch(setPopular(data));
    });
  }, [dispatch]);

  return (
    <div>
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
      <UpComing />
    </div>
  );
}

export default HomePage;
