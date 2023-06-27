import Image from "next/image";
import TCI from "@public/TC-implementation.png";
import TCM from "@public/TC-manufacturing.png";
import TCA from "@public/TC-aeospace.png";
import TCAu from "@public/TC-automotive.png";
import TCE from "@public/TC-electronics.png";
import Cta from "@components/Cta";

const page = () => {
  return (
    <>
      <section className="section-sp4">
        <div className="container">
          <div className="m-b0">
            <h6>Services</h6>
            <h4 className="fw4 m-b20">Teamcenter Implementation</h4>
          </div>{" "}
          <hr />
          <div className="m-t20">
            <p className="m-b20">
              At Luminosa Technology, we offer expert implementation and support
              services for Siemens Teamcenter, a world-class product lifecycle
              management (PLM) software solution. With our team of experienced
              professionals, we have successfully implemented Teamcenter at over
              50 customer sites, across a variety of industries and sectors.
            </p>
          </div>
          <div className="row ">
            <div className="col-lg-5 col-sm-12">
              <Image width={"100%"} src={TCI} />
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="m-t50">
                <p>
                  Teamcenter is a powerful software tool that enables
                  organizations to streamline and optimize their product
                  development and management processes, from ideation to
                  retirement.{" "}
                </p>
                <p>
                  By providing a centralized repository for all product-related
                  data and processes, Teamcenter allows companies to increase
                  collaboration, reduce errors and waste, and speed up
                  time-to-market.
                </p>
              </div>
            </div>
          </div>
          <p className="m-t20 m-b20">
            We specialize in helping companies leverage the full power of
            Teamcenter to improve efficiency, productivity, and overall business
            performance. Our services include system configuration,
            customization, integration, migration, and support, tailored to each
            client's unique needs and requirements.
          </p>
          <h6 className="m-b20">
            We have implemented Teamcenter in various sectors, including :
          </h6>
          <hr />
          <section className="section-sp4">
            <div className="row">
              <div className="col-lg-5 col-sm-12">
                <Image src={TCM} />
              </div>
              <div className="col-lg-6 col-sm-12">
                <p className="m-t50 p-10">
                  <strong>Manufacturing</strong> : Teamcenter provides the
                  necessary tools for managing the complex and dynamic processes
                  involved in manufacturing, enabling companies to optimize
                  their operations and reduce costs.
                </p>
              </div>
            </div>
          </section>{" "}
          <hr />
          <section className="section-sp4">
            <div className="row">
              <div className="col-lg-5 col-sm-12 order-lg-2 order-md-2">
                <Image src={TCA} />
              </div>
              <div className="col-lg-6 col-sm-12">
                <p className="m-t50 p-10">
                  <strong>Aerospace and Defense</strong> : Teamcenter allows
                  aerospace and defense companies to manage their complex
                  product development processes, while also ensuring regulatory
                  compliance and quality standards.
                </p>
              </div>
            </div>
          </section>{" "}
          <hr />
          <section className="section-sp4">
            <div className="row">
              <div className="col-lg-5 col-sm-12">
                <Image src={TCAu} />
              </div>
              <div className="col-lg-6 col-sm-12">
                <p className="m-t50 p-10">
                  <strong>Automotive</strong> : Teamcenter helps automotive
                  companies streamline their product development processes, from
                  design to production, while also managing the supply chain and
                  ensuring quality control.
                </p>
              </div>
            </div>
          </section>{" "}
          <hr />
          <section className="section-sp4">
            <div className="row">
              <div className="col-lg-5 col-sm-12 order-lg-2 order-md-2">
                <Image src={TCE} />
              </div>
              <div className="col-lg-6 col-sm-12">
                <p className="m-t50 p-10">
                  <strong> Electronics and High-Tech</strong> : With its
                  advanced data management and collaboration tools, Teamcenter
                  is ideal for electronics and high-tech companies looking to
                  speed up time-to-market and stay ahead of the competition.
                </p>
              </div>{" "}
            </div>
          </section>
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

export default page;
