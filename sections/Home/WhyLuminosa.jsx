"use client";
import Image from "next/image";
const WhyLuminosa = ({ homeData }) => {
  return (
    <section className="section-sp4 bg-white">
      <div className="container">
        {homeData.map((item) => (
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="p-20">
                <Image
                  width={500}
                  height={500}
                  src={item.whyImage}
                  alt="Why luminosa"
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 align-items-center">
              <div className="p-20 m-t20">
                <h3 className="fw4 m-b20">
                  <strong>{item.whyLuminosa}</strong>
                </h3>
                <hr className="border-small" />
                <p>{item.whyLuminosaDesc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyLuminosa;
