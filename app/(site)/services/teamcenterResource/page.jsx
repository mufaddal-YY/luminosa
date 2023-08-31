import Image from "next/image";
import Cta from "@components/Cta";
import TC from "@public/tc-staffing.png";

const TeamcenterResourceStaffing = () => {
  return (
    <>
      <section className="section-sp4">
        <div className="container">
          <div className="m-b0 ">
            <h6>Services</h6>
            <h3 className="fw4 m-b20">Teamcenter Resource Staffing</h3>
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
                  alt="Teamcenter Resource Staffing"
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="m-t20">
                <p>
                  Resource Supply in Teamcenter PLM refers to the management and
                  allocation of resources within the product development
                  lifecycle. It involves assigning and tracking resources such
                  as material, equipment, tools and personnel to specific tasks,
                  projects
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-light p-40 radius-md">
            <p>
              Whether you need short-term staffing support or long-term resource
              planning, Luminosa Technology can help. Contact us today to learn
              more about our resource staffing services and how we can help your
              business succeed with Siemens Teamcenter and Mendix.
            </p>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
};

export default TeamcenterResourceStaffing;
