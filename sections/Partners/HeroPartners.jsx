"use client";

import Image from "next/image";

const HeroPartners = ({ partnersData }) => {
  return (
    <section className="section-sp4 bg-gray-light">
      {partnersData.map((item) => (
        <div className="container">
          <div className="text-center m-t10 m-b20">
            <h3 className="fw4">{item.title}</h3>
            <hr className="borderSmall" />
            <p className="">{item.description}</p>
          </div>

          {/* <div className="row">
            <div className="col"></div>
            {item.partners.map((item) => (
              <div className="col-lg-5 col-sm-12">
                <div className="partnerBg ">
                  <Image
                    width={600}
                    height={300}
                    src={item.image}
                    alt="seimens-partner"
                  />
                  <h4 className="m-t20 m-b20">{item.title}</h4>
                  <hr />
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
            <div className="col"></div>
          </div> */}
        </div>
      ))}
    </section>
  );
};

export default HeroPartners;
