import React from "react";
import Slider from "react-slick";
import Image from "next/image";

function Popular({ data, baseUrl }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: false,
  };
  return (
    <div className="relative px-4 md:px-4 z-50 py-3">
      <h1
        className="text-white text-3xl pb-4 px-2 font-semibold"
        style={{ fontSize: "1.4vw" }}
      >
        Populer di Netlix
      </h1>
      <div className="w-full flex items-center justify-center text-white">
        <div className="max-w-full">
          <Slider {...settings}>
            {data?.map((item, idx) => {
              const Image = baseUrl + item?.backdrop_path;
              return (
                <div key={idx} className="px-1">
                  <div className="bg-slate-500 rounded">
                    <Image
                      src={Image}
                      className="rounded"
                      alt=""
                      width={1000}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Popular;
