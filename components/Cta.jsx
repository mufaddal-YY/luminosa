"use client";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Cta = () => {
  return (
    <div className="section-container section-sp4 ctaBg ">
      <div className="container">
        <div className="p-t80 p-b80 ">
          <h4 className="fw4 m-b0 text-white d-flex justify-content-start">
            Join the digital revolution and accelerate
          </h4>
          <h3 className="text-white d-flex justify-content-start m-b30">
            your transformation today!
          </h3>
          <div className="d-flex justify-content-start">
            <Link href={"/"} className="btn-outline-w button-md radius-md">
              Get in touch <BsArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
