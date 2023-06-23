"use client";
import Link from "next/link";

const HeroBanner = () => {
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
          <source type="video/mp4" src="video.mp4" />
        </video>
      </div>

      <div className="container">
        <div className=" bannerText">
          <h3 className="text-white">Accelerate innovation</h3>
          <h6 className="text-white">
            with our PLM solutions & low-code development platform.
          </h6>
          <hr />
          <p className=" text-white m-b20">
            "Transform your business with Luminosa's software expertise,
            industry knowledge, <br className="hidden" /> and business
            consulting - Building Tomorrow Together."
          </p>
          <div className=" justify-content-start">
            <Link
              className="btn-outline-w button-md radius-md m-b10 m-r10 "
              href={"/about"}>
              Explore our solutions <i className="ti-arrow-right"></i>
            </Link>
            <Link
              className="btn-outline-w button-md radius-md m-b10 hidden"
              href={"/about"}>
              Talk to an Expert <i className="ti-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
