import React from "react";
import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import netflixSymbol from "@../../../public/assets/netflix-symbol.png";

function Banner({ data, baseURL }) {
  return (
    <div>
      {data?.length
        ? data?.slice(19, 20).map((item, idx) => {
            const images = baseURL + item?.backdrop_path;

            return (
              <div key={idx}>
                <div
                  className={`h-screen w-full flex items-center bg-cover`}
                  style={{
                    backgroundImage: `url(${images})`,
                  }}
                >
                  <div className="z-0 h-1/3 absolute top-3/4 inset-0 bg-gradient-to-b from-transparent via-body to-body opacity-80" />
                  <div className="px-4 md:px-16 max-w-full z-10">
                    <div className="text-white">
                      <span className=" uppercase text-3lg font-bold inline-flex items-center">
                        <Image
                          src={netflixSymbol}
                          alt="NetflixSymbol"
                          width={25}
                        />
                        <h1 className=" tracking-widest opacity-70">Serial </h1>
                      </span>
                      <h1 className="grid grid-cols-2 lg:text-7xl xl:text-5xl 2xl:text-7xl font-extrabold pb-5 uppercase">
                        {item?.name}
                      </h1>
                      <p
                        className="grid grid-cols-2 text-xl "
                        style={{ fontSize: "1.2vw" }}
                      >
                        {item?.overview}
                      </p>
                      <div className="flex pt-7">
                        <button
                          type="button"
                          className=" font-medium rounded-md text-lg px-6 py-2.5 text-center items-center inline-flex bg-white hover:bg-opacity-60 text-black mr-2 mb-2"
                        >
                          <span>
                            <BsFillPlayFill className=" text-4xl inline-flex " />{" "}
                            Putar
                          </span>
                        </button>
                        <button
                          type="button"
                          className=" font-medium rounded-md text-lg px-6 py-2.5 text-center items-center inline-flex bg-[#585055] text-white mr-2 mb-2 bg-opacity-80 hover:bg-opacity-60"
                        >
                          <span>
                            <AiOutlineInfoCircle className=" text-4xl inline-flex mr-3" />
                            Selengkapnya
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : "Data is null"}
    </div>
  );
}

export default Banner;
