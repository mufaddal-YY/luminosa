import Image from "next/image";
import Cta from "@components/Cta";
import TC from "@public/tc-upgrade.png";
import Up from "@public/up.png";
import Accordions from "@components/Accordions";

const accordionData = [
  {
    title: "Server Customization",
    description: [
      "Server Customization is the core of all customization as most of the Business logic is written in this layer. Server customization mainly deals with all business transaction as it interacts with database through Persistence Object Model (POM) API.",
      "Server customization is done through C based API provided by Teamcenter PLM. This API is also called Integration Toolkit (ITK). SOA customization and BMIDE extension options are also available for customization on Teamcenter PLM Server",
      "As shown in the diagram, all BMIDE extension is in server side. Because most BMIDE extension overrides or changes object behaviour based on business requirement. This can be only accomplished in server layer; hence all extension is implemented by using core ITK API provided in server layer.",
    ],
  },
  {
    title: "Web Layer",
    description: [
      "Web Layer is Teamcenter based J2EE deployment layer which basically communicates between Server and client.",
    ],
  },

  {
    title: "Client Layer",
    description: [
      "Client Layer is portal or thin client customization which usually deals with user interface and data of the results retrieved from the server request.",
    ],
  },
  {
    title: "SOA Client",
    description: [
      "SOA Client and Server is Service Oriented Architecture (SOA) Application Programming Interface (API) for calling SOA services.",
    ],
  },
  {
    title: "FMS",
    description: [
      "FMS is resource layer supporting actual file transfer between client and server through FMS framework.",
    ],
  },
];

const TeamcenterUpgrade = () => {
  return (
    <>
      <section className="section-sp4">
        <div className="container">
          <div className="m-b0 ">
            <h6>Services</h6>
            <h3 className="fw4 m-b20">Teamcenter Upgrade</h3>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="m-t10 m-b10">
                <Image
                  className="radius-md"
                  width={1080}
                  height={500}
                  src={Up}
                  alt="Teamcenter Upgrade"
                />
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="m-t20">
                <p>
                  A Teamcenter Upgrade involves migrating an existing
                  installation of Simens Teamcenter software to a newer version
                  or release. The upgrade process includes updating the
                  software, migrating data and ensuring compatibility with the
                  organization’s IT infrastructure. Here is a summary of the
                  Teamcenter upgrade process
                </p>
                <ul>
                  <li>Pre-Upgrade Assessment:</li>
                  <li>Planning and Preparation:</li>
                  <li>Software Installation and Configuration:</li>
                  <li>Teamcenter Development:</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="m-t10 m-b10">
            <p>
              <strong>Teamcenter Development:</strong> Teamcenter development
              involves customizing and extending the functionality of Siemens
              Teamcenter software to meet specific business requirements. It
              includes creating new features, modifying existing functionality,
              and integrating Teamcenter with other systems to optimize
              processes and enhances user experience
            </p>

            <p>
              Teamcenter PLM customization architecture can be broadly
              classified based on Teamcenter PLM technical architecture. It can
              be categorized into three layers as shown below.
            </p>

            <Accordions accordionData={accordionData} />
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

export default TeamcenterUpgrade;
