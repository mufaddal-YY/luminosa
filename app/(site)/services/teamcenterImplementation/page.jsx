import Image from "next/image";
import Cta from "@components/Cta";
import TCI from "@public/TCI.png";
import TCI1 from "@public/tci-1.png";
import Accordions from "@components/Accordions";

const accordionData = [
  {
    title: "Manufacturing",
    description: [
      "Teamcenter provides the necessary tools for managing the complex and dynamic processes involved in manufacturing, enabling companies to optimize their operations and reduce costs.",
    ],
  },
  {
    title: "Aerospace and Defense",
    description: [
      " Teamcenter allows aerospace and defense companies to manage their complex product development processes, while also ensuring regulatory compliance and quality standards.",
    ],
  },

  {
    title: "Automotive",
    description: [
      "Teamcenter helps automotive companies streamline their product development processes, from design to production, while also managing the supply chain and ensuring quality control.",
    ],
  },
  {
    title: "Electronics and High-Tech",
    description: [
      "With its advanced data management and collaboration tools, Teamcenter is ideal for electronics and high-tech companies looking to speed up time-to-market and stay ahead of the competition.",
    ],
  },
];

const TeamcenterImplementation = () => {
  return (
    <>
      <section className="section-sp4">
        <div className="container">
          <div className="m-b0 ">
            <h6>Services</h6>
            <h3 className="fw4 m-b20">Teamcenter Implementation</h3>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-5 col-sm-12">
              <div className="m-t10 m-b10">
                <Image
                  className="radius-md"
                  width={500}
                  height={500}
                  src={TCI}
                  alt="Teamcenter Implementation"
                />
              </div>
            </div>

            <div className="col-lg-7 col-sm-12">
              <div className="m-t20">
                <p>
                  Teamcenter Implementation involves deploying Siemens
                  Teamcenter software to manage product lifecycle data and
                  processes within an organization. The Process includes
                  planning, system setup, data model definition, configuration,
                  customization, integration, testing/training,
                  deployment/go-live and post-implementation support. <br />
                  <br /> It aims to streamline data management, optimize
                  workflow and improve collaboration across departments.
                  Successful implementation ensures efficient product lifecycle
                  management and enhances productivity. <br />
                  <br /> Implementing Teamcenter will be able to manage your
                  organization to interact with people, understand the
                  processes, data that generated by product and maintaining the
                  all type of accesses within organization.
                </p>
              </div>
            </div>
          </div>

          <hr />

          <div className="row m-t20 m-b20">
            <div className="col-lg-6 col-sm-12 text-center order-lg-2">
              <div className="m-t20 m-b10">
                <Image
                  className="radius-md"
                  width={500}
                  height={300}
                  src={TCI1}
                  alt="Teamcenter Implementation"
                />
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="m-t20">
                <p>
                  <strong>
                    We have implemented Teamcenter in various sectors,
                    including:
                  </strong>
                </p>

                <Accordions accordionData={accordionData} />
              </div>
            </div>
          </div>

          <div className="bg-gray-light p-40 radius-md">
            <p>
              At Luminosa Technology, we take pride in our ability to provide
              exceptional Teamcenter implementation services that help our
              clients achieve their goals and succeed in their respective
              industries. Contact us today to learn more about how we can help
              your organization optimize its product development and management
              processes with Siemens Teamcenter.
            </p>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
};

export default TeamcenterImplementation;