"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const IndustryCard = ({ link, name, image }) => {
  return (
    <div className="portfolio-box style-2 m-b30">
      <div className="portfolio-media ovpr-dark">
        <Image height={600} src={image} alt="" />
      </div>
      <div className="portfolio-info">
        <div className="d-flex justify-content-start">
          <div className="p-20">
            <h6 className="m-b0 text-white">
              <Link href={link}>{name}</Link>
            </h6> <hr className="bg-white m-t10 m-b10 border" />
            <span className="m-b10">
              <Link href={link}>
                
                <small className="fs12 text-white">
                  Explore <BsArrowRight />
                </small>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
