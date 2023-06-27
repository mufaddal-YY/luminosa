"use client";
import ServiceCard from "@components/Cards/ServiceCard";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import TcUp from "@public/TcUp.png";
import Tcnd from "@public/Tcnd.png";

import Mendix from "@public/Mendix.png";
import TcMg from "@public/TcMg.png";
import MFT from "@public/MFT.png";
import PMLC from "@public/PMLC.png";
import Staff from "@public/Staff.png";
import Tci from "@public/Tci.png";
import Cta from "@components/Cta";

const Content = [
  {
    name: "TC Upgrade",
    slug: "tc-upgrade",
    thumb: TcUp,
  },
  {
    name: "TC Migration",
    slug: "tc-upgrade",
    thumb: TcMg,
  },
  {
    name: "PML Consulting",
    slug: "tc-upgrade",
    thumb: PMLC,
  },
  {
    name: "Mendix",
    slug: "tc-upgrade",
    thumb: Mendix,
  },
  {
    name: "Teamcenter (Customization & Development)",
    slug: "tc-upgrade",
    thumb: Tcnd,
  },
  {
    name: "Mendix ( For Teamcenter )",
    slug: "tc-upgrade",
    thumb: MFT,
  },
  {
    name: "Staffing",
    slug: "tc-upgrade",
    thumb: Staff,
  },
  {
    name: "Teamcenter (Cloud Implementation)",
    slug: "tc-upgrade",
    thumb: Tci,
  },
];

const ServicesPage = () => {
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
              {Content.map((item) => (
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="p-10">
                    <ServiceCard
                      link={item.slug}
                      name={item.name}
                      image={item.thumb}
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
};

export default ServicesPage;
