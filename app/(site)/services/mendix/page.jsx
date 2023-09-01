import Image from "next/image";
import Cta from "@components/Cta";
import TC from "@public/mendix1.png";
import Accordions from "@components/Accordions";

const accordionData = [
  {
    title: "Application development",
    description: [
      "We can help clients build custom applications from scratch using the Mendix platform. Our team works closely with clients to understand their requirements and design an application that meets their specific needs.",
    ],
  },
  {
    title: "Application integration",
    description: [
      " We can help clients integrate their Mendix applications with other systems and applications, ensuring seamless communication and data exchange between systems",
    ],
  },

  {
    title: "Application modernization",
    description: [
      "We can help clients modernize their legacy applications by migrating them to the Mendix platform. This can help clients reduce technical debt, improve application performance, and enhance user experience.",
    ],
  },
  {
    title: "Application maintenance and support",
    description: [
      "We offer ongoing maintenance and support services to ensure clients' Mendix applications are running smoothly and addressing any issues that may arise",
    ],
  },
];

const Mendix = () => {
  return (
    <>
      <section className="section-sp4">
        <div className="container">
          <div className="m-b0 ">
            <h6>Services</h6>
            <h3 className="fw4 m-b20">Mendix</h3>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-5 col-sm-12">
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
            <div className="col-lg-7 col-sm-12">
              <div className="m-t20">
                <p>
                  As a Mendix partner, Luminosa Technology provides a range of
                  services to help clients rapidly develop and deploy custom
                  enterprise applications. Our team of experienced professionals
                  has a deep understanding of the Mendix platform and can
                  leverage its capabilities to create tailored solutions that
                  meet our clients' unique needs.
                </p>

                <p>
                  <strong>Our Mendix services include:</strong>
                </p>
                <Accordions accordionData={accordionData} />
              </div>
            </div>
          </div>
          <div className="m-t10 m-b10">
            <p>
              In addition to these core services, we also offer training and
              consulting services to help clients get the most out of their
              Mendix investment. Our experts can provide guidance on best
              practices, architecture, and implementation strategies to help
              clients achieve their business objectives.
            </p>
          </div>

          <div>
            <p>
              At Luminosa Technology, we pride ourselves on providing
              exceptional service and support to our Mendix clients. We are
              committed to delivering solutions that improve efficiency,
              increase productivity, and drive business success. Contact us
              today to learn more about how we can help your business with
              Mendix.
            </p>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
};

export default Mendix;
