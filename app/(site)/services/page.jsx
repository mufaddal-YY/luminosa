"use client";
import ServiceCard from "@components/Cards/ServiceCard";
import Link from "next/link";
import Cta from "@components/Cta";
import { getServices } from "@sanity/sanity-utils";

export default async function Services() {
  const servicesData = await getServices();

  return (
    <>
      <section className="section-sp4">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between ">
            <div className="m-b0">
              <h3 className="fw4">Services</h3>
            </div>
          </div>
          <hr className="border-small" />
          <p>
            Partnering with Luminosa Technology means unlocking the power of
            digital transformation for your business, leveraging cutting-edge
            PLM solutions and low-code development to drive growth and
            efficiency
          </p>
          <div className="m-t20 m-b20">
            <div className="row">
              {servicesData.map((item) => (
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="p-10">
                    <ServiceCard
                      link={`services/${item.slug}`}
                      name={item?.servicesTitle}
                      image={item.thumbImage}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
