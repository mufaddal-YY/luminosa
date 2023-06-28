"use client";

import Link from "next/link";
import { PortableText } from "@portabletext/react";

const HeroBanner = ({ homeData }) => {
  return (
    <>
      <div className="ovpr-middle">
        <video
          className="bannerVideo "
          muted="true"
          loop="true"
          autoplay="true"
          loading="lazy"
          alt="">
          <source type="video/mp4" src="1.mp4" />
        </video>
      </div>

      <div className="container">
        {homeData.map((item) => (
          <div className=" bannerText">
            <h3 className="text-white">{item.bannerHead}</h3>
            <h6 className="text-white">{item.bannerTag}</h6>
            <hr />
            <p className=" text-white m-b20">
              {" "}
              <PortableText value={item.bannerDescription} />
            </p>
            <div className=" justify-content-start">
              <Link
                className="btn-outline-w button-md radius-md m-b10 m-r10 "
                href={"/services"}>
                Explore our solutions <i className="ti-arrow-right"></i>
              </Link>
              <Link
                className="btn-outline-w button-md radius-md m-b10 hidden"
                href={"/contact"}>
                Talk to an Expert <i className="ti-arrow-right"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroBanner;
