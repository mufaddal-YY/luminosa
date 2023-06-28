"use client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

const AboutHero = ({ serviceData }) => {
  return (
    <section className="section-sp4">
      {serviceData.map((item) => (
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between m-b20">
            <div className="m-b0">
              <h3 className="fw4 m-b20"> {item.aboutTitle}</h3>
              <hr className="borderSmall" />
              <p>
                <PortableText value={item.aboutDesc} />
              </p>
            </div>
          </div>

          <Image width={1920} height={600}  src={item.aboutImage} alt="about Image" />
        </div>
      ))}
    </section>
  );
};

export default AboutHero;
