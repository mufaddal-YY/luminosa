"use client";
import React from "react";
import { PortableText } from "@portabletext/react";

const OurStory = ({ serviceData }) => {
  return (
    <section className="m-b50">
      {serviceData.map((item) => (
        <div className="container">
          <h4>{item.ourStory}</h4>
          <hr />
          <p>
            <PortableText value={item.storyDesc} />
          </p>
        </div>
      ))}
    </section>
  );
};

export default OurStory;
