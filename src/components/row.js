import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { AiOutlineRight } from "react-icons/ai";
import moment from "moment";
import Modal from "./Modal";

function Row({ data, baseURL, title }) {
  const slider = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [more, setMore] = useState(false);
  const [modal, setModal] = useState(false);
  const dropDownRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
  };

  const handleMouseEnter = (idx) => {
    setHoveredIndex(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleMoreEnter = () => {
    setMore(true);
  };

  const handleMoreLeave = () => {
    setMore(false);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleClose = () => {
    setModal(false);
  };

  useEffect(() => {
    function handleClickOutside(MouseEvent) {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(MouseEvent.Node)
      ) {
        setModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div>
      <div className="relative px-16 md:px-14 py-4 ">
        <div className="flex items-center">
          <button
            className="text-white text-3xl pb-2 px-2 font-semibold flex items-end"
            style={{ fontSize: "1.4vw" }}
            type="button"
            onMouseEnter={handleMoreEnter}
            onMouseLeave={handleMoreLeave}
          >
            {title}
            {more && (
              <button
                onClick={handleModal}
                className="flex text-sm items-center ml-2 mb-1.5 animate-pulse text-[#54b9c5]"
              >
                <h1>Telusuri Semua</h1>
                <AiOutlineRight size={12} />
              </button>
            )}
          </button>
        </div>

        <Modal
          modal={modal}
          handleClose={handleClose}
          data={data}
          baseUrl={baseURL}
          handleMouseLeave={handleMouseLeave}
          handleMouseEnter={handleMouseEnter}
          hoveredIndex={hoveredIndex}
          title={title}
          dropDownRef={dropDownRef}
        />

        <div className="w-full flex items-center justify-center text-white">
          <div className="w-full">
            <div className="px-1">
              <Slider ref={slider} {...settings}>
                {data?.length ? (
                  data?.map((item, idx) => {
                    const Image =
                      baseURL + item?.backdrop_path || item.poster_path;
                    const title = item.title || item.original_name;
                    const dateTime = item.first_air_date || item.release_date;
                    return (
                      <div
                        key={idx}
                        className="relative px-1 z-0"
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <img
                          src={Image}
                          className="w-full rounded z-0"
                          alt="Thumbnail"
                        />
                        {hoveredIndex === idx && (
                          <div className="z-0 absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                            <h3 className="text-sm font-semibold">{title}</h3>
                            <p className="mt-2 text-xs">
                              {moment(`${dateTime}`, "YYYYMMDD").format("ll")}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div>Null</div>
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row;
