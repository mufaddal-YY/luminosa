"use client";
import Link from "next/link";
import React from "react";

const CareerCard = () => {
  return (
    <div className="feature-bx1 p-30">
      <div className="d-flex justify-content-between">
        <h6>Lorem Ipsum</h6>
        <Link href={"/"} className="btn-secondary button-md radius-md">
          Apply Now
        </Link>
      </div>
      <hr />
      <div className="m-t20 m-b20">
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit amet,
            consectetur adipiscing elit.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit amet,
            consectetur adipiscing elit.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit amet,
            consectetur adipiscing elit.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit amet,
            consectetur adipiscing elit.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CareerCard;
