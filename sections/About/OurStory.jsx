import React from "react";
import { PortableText } from "@portabletext/react";

const OurStory = ({ aboutData }) => {
  return (
    <section className="m-b50">
      {aboutData.map((item) => (
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
