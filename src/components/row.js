import React, { useRef } from "react";
import Slider from "react-slick";
import { BsFillPlayFill } from "react-icons/bs";

function Row({ data, baseURL, title }) {
  console.log(data);
  const slider = React.createRef();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
  };
  return (
    <div className="relative px-16 md:px-14 z-20 py-3">
      <h1
        className="text-white text-3xl pb-4 px-2 font-semibold"
        style={{ fontSize: "1.4vw" }}
      >
        {title}
      </h1>
      <div className="w-full flex items-center justify-center">
        <div className="max-w-full">
          <Slider ref={slider} {...settings}>
            {data?.length ? (
              data?.map((item, idx) => {
                const Image = baseURL + item?.backdrop_path || item.poster_path;
                return (
                  <div key={idx} className="px-1">
                    <div className="group relative">
                      <img
                        src={Image}
                        className="rounded cursor-pointer object-cover transition duration shadow-xl group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full"
                        alt="Thumbnail"
                        width={1000}
                      />
                      <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[4vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
                        <img
                          src={Image}
                          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full"
                          alt="Thumbnail"
                        />
                        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
                          <div className="flex flex-row items-center gap-3">
                            <div
                              className=" cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
                              onClick={() => {}}
                            >
                              <BsFillPlayFill size={30} />
                            </div>
                          </div>
                          <p className="text-green-400 font-semibold mt-4">
                            {item.vote_average} cocok
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>Data not available</div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Row;
