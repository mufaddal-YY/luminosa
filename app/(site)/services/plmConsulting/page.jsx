import Image from "next/image";
import Cta from "@components/Cta";
import TC from "@public/plm-consulting.png";

const PLMConsulting = () => {
  return (
    <>
      <section className="section-sp4">
        <div className="container">
          <div className="m-b0 ">
            <h6>Services</h6>
            <h3 className="fw4 m-b20">PLM Consulting</h3>
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
                  alt="PLM Consulting"
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="m-t20">
                <p>
                  Teamcenter Consultancy services provide expert guidance and
                  support to organizations implementing or optimizing Siemens
                  Teamcenter software. Consultant with deep knowledge and
                  experience in Teamcenter help organization maximize the value
                  and benefits of the PLM solution.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p>
              If you're looking for comprehensive and reliable consulting
              services for Siemens Teamcenter, look no further than Luminosa
              Technology. Contact us today to learn more about how we can help
              your business succeed.
            </p>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
};

export default PLMConsulting;
