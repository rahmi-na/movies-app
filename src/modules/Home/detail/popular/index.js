import React from "react";
import Slider from "react-slick";
import Image from "next/image";

function Popular({ popular }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: false,
  };
  return (
    <div className="relative px-4 md:px-10 z-50 py-3">
      <h1
        className="text-white text-3xl pb-4 font-semibold"
        style={{ fontSize: "1.4vw" }}
      >
        Populer di Netflix
      </h1>
      <div className="w-full flex items-center justify-center text-white">
        <div className="max-w-full">
          <Slider {...settings}>
            {popular?.length
              ? popular?.map((item, idx) => (
                  <div key={idx} className="px-2">
                    <div className="bg-slate-500 rounded">
                      <Image
                        src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
                        className="rounded"
                        width={1000}
                        alt="Populer di Netflix"
                      />
                    </div>
                  </div>
                ))
              : "Popular Not Found"}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Popular;
