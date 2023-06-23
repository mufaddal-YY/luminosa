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

const Content = [
  {
    name: "TC Upgrade",
    link: "tc-upgrade",
    thumb: TcUp,
  },
  {
    name: "TC Migration",
    link: "tc-upgrade",
    thumb: TcMg,
  },
  {
    name: "PML Consulting",
    link: "tc-upgrade",
    thumb: PMLC,
  },
  {
    name: "Mendix",
    link: "tc-upgrade",
    thumb: Mendix,
  },
  {
    name: "Teamcenter (Customization & Development)",
    link: "tc-upgrade",
    thumb: Tcnd,
  },

  {
    name: "Mendix ( For Teamcenter )",
    link: "tc-upgrade",
    thumb: MFT,
  },
  {
    name: "Staffing",
    link: "tc-upgrade",
    thumb: Staff,
  },
  {
    name: "Teamcenter (Cloud Implementation)",
    link: "tc-upgrade",
    thumb: Tci,
  },
];

const Services = () => {
  return (
    <section className="section-sp4">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between ">
          <div className="m-b0">
            <h3 className="fw4">
              {" "}
              <strong>Services</strong> we provide
            </h3>
          </div>
          <div className="flex-column">
            <Link
              href={""}
              className="btn-secondary button-md radius-md m-t20 m-b20">
              View All <BsArrowRight />
            </Link>
          </div>
        </div>
        <hr className="border-small" />
        <div className="m-t20 m-b20">
          <div className="row">
            {Content.map((item) => (
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="p-10">
                  <ServiceCard
                    link={item.link}
                    name={item.name}
                    image={item.thumb}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Services;
