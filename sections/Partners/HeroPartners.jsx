"use client";
import Image from "next/image";
import Seimens from "@public/seimens.png";
import Mendix from "@public/mendixpartner.png";

const HeroPartners = () => {
  return (
    <section className="section-sp4 bg-gray-light">
      <div className="container">
        <div className="text-center m-t20 m-b20">
          <h3 className="fw4">
            <strong>Luminosa </strong>Partner
          </h3>
          <hr className="borderSmall" />
          <p className="">
            As a proud partner of Siemens and Mendix, Luminos Technology
            leverages its advanced software solutions to deliver{" "}
            <br className="hidden" /> cutting-edge products and services that
            solve complex business challenges with ease.
          </p>
        </div>

        <div className="row">
          <div className="col"></div>
          <div className="col-lg-5 col-sm-12">
            <div className="partnerBg ">
              <Image src={Seimens} alt="seimens-partner" />
              <h4 className="m-t20 m-b20">Seimens</h4>
              <hr />
              <p>
                As a Siemens solution partner, we can provide tailored solutions
                to companies from different domains by utilizing the powerful
                features of Teamcenter for product lifecycle management,
                enabling them to streamline processes, improve collaboration,
                and achieve greater efficiency in their operations.
              </p>
            </div>
          </div>
          {/* <div className="col"></div> */}
          <div className="col-lg-5 col-sm-12">
            <div className="partnerBg ">
              <Image src={Mendix} alt="seimens-partner" />
              <h4 className="m-t20 m-b20">Mendix</h4>
              <hr />
              <p>
                As a Mendix partner, we can offer companies from different
                domains the ability to rapidly build and deploy custom
                enterprise applications, improving their efficiency,
                productivity, and overall business performance.
              </p>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroPartners;
