import Image from "next/image";
import Cta from "@components/Cta";
import TC from "@public/mendix-for-teamcenter.png";
import Accordions from "@components/Accordions";

const accordionData = [
  {
    title: "Custom application development",
    description: [
      "Custom application development: Our team can develop customized applications that are specifically designed to work seamlessly with Teamcenter, providing users with a seamless and intuitive experience.",
    ],
  },
  {
    title: "System integration",
    description: [
      "System integration: We can integrate Mendix and Teamcenter with other software applications and systems, ensuring that all of your business processes are connected and working together seamlessly.",
    ],
  },

  {
    title: "Maintenance and support",
    description: [
      "Maintenance and support: Our team offers ongoing maintenance and support for all of our Mendix for Teamcenter solutions, ensuring that your applications and systems are always up-to-date and functioning at peak performance.",
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

const MendixForTeamcenter = () => {
  return (
    <>
      <section className="section-sp4">
        <div className="container">
          <div className="m-b0 ">
            <h6>Services</h6>
            <h3 className="fw4 m-b20">Mendix for Teamcenter</h3>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="m-t10 m-b10">
                <Image
                  className="radius-md"
                  width={1080}
                  height={500}
                  src={TC}
                  alt="Mendix for Teamcenter"
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="m-t20">
                <p>
                  At Luminosa Technology, we are proud to offer comprehensive
                  Mendix for Teamcenter services to our clients. Our team of
                  experienced professionals are experts in both Mendix and
                  Teamcenter, and we leverage this expertise to deliver
                  customized solutions that meet the unique needs of our
                  clients.
                </p>

                <p>
                  Mendix is a powerful low-code development platform that allows
                  users to rapidly build and deploy custom enterprise
                  applications. By combining Mendix with Teamcenter, our team
                  can help clients streamline their product lifecycle management
                  processes, reducing costs and improving overall efficiency.
                </p>

                <p>
                  Our Mendix for Teamcenter services includes everything from
                  custom application development to system integration and
                  maintenance. Our team works closely with clients to understand
                  their specific needs and challenges, and we use our expertise
                  to develop tailored solutions that meet those needs head-on.
                </p>
              </div>
            </div>
          </div>
          <div className="p-10">
            <p>
              <strong>
                Some of the specific Mendix for Teamcenter services we offer
                include:
              </strong>
            </p>

            <Accordions accordionData={accordionData} />
          </div>

          <div>
            <p>
              At Luminosa Technology, we are committed to delivering innovative
              and effective solutions that help our clients achieve their goals.
              Our Mendix for Teamcenter services are just one example of the
              many ways we are able to bring technology and expertise together
              to help our clients build their future.
            </p>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
};

export default MendixForTeamcenter;
