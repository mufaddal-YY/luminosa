"use client";
import Image from "next/image";
import About from '@public/about.png'
import Link from "next/link";

Image;
const AboutHero = () => {
  return (
    <section className="section-sp4">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between m-b20">
          <div className="m-b0">
            <h3 className="fw4 m-b20"> About us</h3>
            <hr className="borderSmall" />
            <p>
              At Luminosa Technology, our mission is to help our clients build
              their future by bringing technology and expertise together. We
              strive to provide innovative and effective solutions that enable
              our clients to compete and thrive in an ever-changing business
              landscape. Our strategy is to offer strong and reliable solutions
              that anticipate and meet the needs of tomorrow, positioning our
              clients for sustained success. With our promise of "Bringing
              Tomorrow Together," we are committed to delivering on our mission
              and helping our clients achieve their goals.
            </p>
          </div>
          
        </div>

        <Image width="100%" src={About} alt="about Image" />
      </div>
    </section>
  );
};

export default AboutHero;
