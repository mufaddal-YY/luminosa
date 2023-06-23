"use client";
import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";
import { HiArrowLongRight } from "react-icons/hi";
import { HiArrowLongLeft } from "react-icons/hi";
import SliderHired1 from "@public/Tci.png";
import SliderHired2 from "@public/Tci.png";
import SliderHired3 from "@public/Tci.png";
import SliderHired4 from "@public/Tci.png";
import SliderHired5 from "@public/Tci.png";

import Image from "next/image";
import IndustryCard from "@components/Cards/IndustryCard";

const content = [
  {
    thumb: SliderHired1,
    name: "Manufacturing",
    link: "/",
  },
  {
    thumb: SliderHired1,
    name: "Aerospace",
    link: "/",
  },
  {
    thumb: SliderHired2,
    name: "Automotive",
    link: "/",
  },
  {
    thumb: SliderHired3,
    name: "Electronics",
    link: "/",
  },

  {
    thumb: SliderHired2,
    name: "Automotive",
    link: "/",
  },
  {
    thumb: SliderHired1,
    name: "Aerospace",
    link: "/",
  },
];

const Industry = () => {
  const settings = {
    dots: false,
    infinite: true,

    slidesToShow: 5,
    slideTransition: "ease-in-out", // Update the slideTransition property

    autoplay: true,
    autoplayTimeout: 500,
    autoplaySpeed: 2200,
    stagePadding: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);
  return (
    <>
      <div className="section-container m-t0 m-b50 bg-white">
        <div className="container">
          <div className="d-flex justify-content-between ">
            <div className="m-b0">
              <h3 className="fw4">
                Industry - Specific <strong> Solutions</strong>
              </h3>
            </div>
          </div>
          <hr />
        </div>
        <div className="container-fluid">
          <Slider
            ref={sliderRef}
            {...settings}
            className="portfolio-carousel p-b20 owl-btn-center-lr owl-btn-1">
            {content.map((item, id) => (
              <div className="slider-item">
                <IndustryCard
                  link={item.link}
                  name={item.name}
                  image={item.thumb}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Industry;
