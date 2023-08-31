"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import IndustryCard from "@components/Cards/IndustryCard";

const Industry = ({ homeData }) => {
  const settings = {
    dots: false,
    infinite: true,

    slidesToShow: 3,
    slideTransition: "ease-in-out", // Update the slideTransition property

    autoplay: true,
    autoplayTimeout: 500,
    autoplaySpeed: 2200,
    stagePadding: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
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
          {homeData.map((data) => (
            <Slider
              ref={sliderRef}
              {...settings}
              className="portfolio-carousel p-b20 owl-btn-center-lr owl-btn-1">
              {data.industry.map((item, index) => (
                <div className="slider-item" key={index}>
                  <IndustryCard
                    name={item.industryTitle}
                    image={item.industryImage}
                  />

                </div>
              ))}
            </Slider>
          ))}
        </div>
      </div>
    </>
  );
};

export default Industry;
