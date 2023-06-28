"use client";
import ServiceCard from "@components/Cards/ServiceCard";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
// import TcUp from "@public/TcUp.png";
// import Tcnd from "@public/Tcnd.png";

// import Mendix from "@public/Mendix.png";
// import TcMg from "@public/TcMg.png";
// import MFT from "@public/MFT.png";
// import PMLC from "@public/PMLC.png";
// import Staff from "@public/Staff.png";
// import Tci from "@public/Tci.png";

// const Content = [
//   {
//     name: "TC Upgrade",
//     slug: "tc-upgrade",
//     thumb: TcUp,
//   },
//   {
//     name: "TC Migration",
//     slug: "tc-upgrade",
//     thumb: TcMg,
//   },
//   {
//     name: "PML Consulting",
//     slug: "tc-upgrade",
//     thumb: PMLC,
//   },
//   {
//     name: "Mendix",
//     slug: "tc-upgrade",
//     thumb: Mendix,
//   },
//   {
//     name: "Teamcenter (Customization & Development)",
//     slug: "tc-upgrade",
//     thumb: Tcnd,
//   },

//   {
//     name: "Mendix ( For Teamcenter )",
//     slug: "tc-upgrade",
//     thumb: MFT,
//   },
//   {
//     name: "Staffing",
//     slug: "tc-upgrade",
//     thumb: Staff,
//   },
//   {
//     name: "Teamcenter (Cloud Implementation)",
//     slug: "tc-upgrade",
//     thumb: Tci,
//   },
// ];

const Services = ({ servicesData }) => {
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
              href={"/services"}
              className="btn-secondary button-md radius-md m-t20 m-b20">
              View All <BsArrowRight />
            </Link>
          </div>
        </div>
        <hr className="border-small" />
        <div className="m-t20 m-b20">
          <div className="row">
            {servicesData.slice(0, 8).map((item) => (
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="p-10">
                  <ServiceCard
                    link={`services/${item.slug}`}
                    name={item.serviceTitle}
                    image={item.thumbImage}
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
