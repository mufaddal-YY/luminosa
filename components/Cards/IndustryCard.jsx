"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const IndustryCard = ({ link, name, image }) => {
  return (
    <div className="portfolio-box style-2 m-b30">
      <div className="portfolio-media ovpr-middle">
        <Image height={300} width={600} src={image} alt="" />
      </div>
      <div className="portfolio-info">
        <div className="d-flex justify-content-start">
          <div className="p-20">
            <h5 className="m-b0 text-white">
            {name}
            </h5>
            <hr className="bg-white m-t10 m-b0 border" />
            <span className="m-b10">
           
                <small className="fs12 text-white">
                  Explore <BsArrowRight />
                </small>
            
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
