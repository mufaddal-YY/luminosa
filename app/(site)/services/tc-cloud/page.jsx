import Image from "next/image";
import Cta from "@components/Cta";
import TC from "@public/tc-cloud.png";
import Accordions from "@components/Accordions";

const accordionData = [
  {
    title: "Increased flexibility and scalability",
    description: [
      "With our cloud implementation service, clients can easily scale their product lifecycle management system up or down as needed to meet changing business demands",
    ],
  },
  {
    title: "Enhanced security and reliability",
    description: [
      " Our cloud implementation and deployment service utilizes the latest security protocols and industry best practices to ensure the integrity of our clients' data and systems",
    ],
  },

  {
    title: "Reduced costs",
    description: [
      "By deploying Teamcenter in the cloud, clients can reduce hardware and maintenance costs while also avoiding the need for expensive IT infrastructure and support.",
    ],
  },
  {
    title: "Improved collaboration and productivity",
    description: [
      "Our cloud implementation and deployment service offers enhanced collaboration and productivity tools that allow teams to work together seamlessly, regardless of location.",
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
            <h3 className="fw4 m-b20">
              Teamcenter Cloud Implementation Deployment
            </h3>
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
                  alt="Teamcenter Cloud Implementation Deployment"
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="m-t20">
                <p>
                  At Luminosa Technology, we understand that every business has
                  unique needs when it comes to product lifecycle management.
                  That's why we offer a comprehensive Teamcenter cloud
                  implementation and deployment service that allows our clients
                  to harness the power of Siemens Teamcenter software in the
                  cloud environment of their choice.
                </p>

                <p>
                  Our Teamcenter cloud implementation and deployment service is
                  available on all major cloud platforms, including AWS, Azure,
                  GCP, and others certified by Siemens for deployment. We work
                  closely with our clients to understand their specific
                  requirements and develop a tailored solution that meets their
                  needs, ensuring a seamless transition to the cloud
                  environment.
                </p>
              </div>
            </div>
          </div>

          <div className="m-t10 m-b10">
            <p>
              <strong>
                Our Teamcenter cloud implementation and deployment service
                offers a range of benefits to our clients, including:
              </strong>
            </p>

            <Accordions accordionData={accordionData} />
          </div>

          <div>
            <p>
              At Luminosa Technology, we pride ourselves on our expertise in
              Teamcenter cloud implementation and deployment. Our team of
              experienced professionals is dedicated to providing exceptional
              service and support to our clients, helping them leverage the
              power of Siemens Teamcenter in the cloud environment of their
              choice. Contact us today to learn more about our Teamcenter cloud
              implementation and deployment service and how we can help your
              business succeed.
            </p>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
};

export default Mendix;
