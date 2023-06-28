"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ link, name, image }) => {
  return (
    <div className="portfolio-box style-2 m-b30">
      <div className="portfolio-media">
        <Image height={600} width={400} src={image} alt="" />
      </div>
      <div className="portfolio-info">
        <div className="feature-bx1">
          <div className="d-flex justify-content-start">
            <div>
              <h6 className="m-b0">
                <Link href={link}>{name}</Link>
              </h6>
              <span className="text-red m-b10">
                <Link href={link}>
                  
                  <small className="fs12">
                    Explore <BsArrowRight />
                  </small>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
