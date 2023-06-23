"use client";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const FillerSection = () => {
  return (
    <section className="section-sp4 sectionBg">
      <div className="container">
        <div className="align-items-center m-t50 m-b20">
          <h3 className="fw3">
            Transform your vision <br className="hidden" /> into reality with action
          </h3>
          <h3 className="fw6">Start today!</h3>
        </div>
        <Link href={"/"} className="btn-secondary button-md radius-md">See all solutions <BsArrowRight/></Link>
      </div>
    </section>
  );
};

export default FillerSection;
