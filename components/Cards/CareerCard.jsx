import React from "react";
import { PortableText } from "@portabletext/react";

const CareerCard = ({jobTitle, description}) => {
  return (
    <div className="feature-bx1 p-30">
      <div className="d-flex justify-content-between">
        <h6>{jobTitle}</h6>
      </div>
      <hr />
      <div className="m-t20 m-b20">
        <p>
          <PortableText value={description} />
        </p>
      </div>
    </div>
  );
};

export default CareerCard;
