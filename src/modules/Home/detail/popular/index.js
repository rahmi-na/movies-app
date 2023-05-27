import React from "react";
import Slider from "react-slick";
import Image from "next/image";

function Popular({ data, baseURL }) {
  console.log(data);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: false,
  };
  return (
    <div className="relative px-16 md:px-16 z-40 py-3">
      <h1
        className="text-white text-3xl pb-4 px-2 font-semibold"
        style={{ fontSize: "1.4vw" }}
      >
        Populer di Netflix
      </h1>
      <div className="w-full flex items-center justify-center text-white">
        <div className="max-w-full">
          <Slider {...settings}>
            {data?.length ? (
              data?.map((item, idx) => {
                const Image = baseURL + item?.backdrop_path;
                return (
                  <div key={idx} className="px-1">
                    <div className="bg-slate-500 rounded">
                      <img src={Image} className="rounded" alt="" />
                    </div>
                  </div>
                );
              })
            ) : (
              <div>Popular data not available</div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Popular;
