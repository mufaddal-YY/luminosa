import Image from "next/image";
import Cta from "@components/Cta";
import TC from "@public/tsdc.png";

const TeamcenterDevelopmentCustomization = () => {
  return (
    <>
      <section className="section-sp4">
        <div className="container">
          <div className="m-b0 ">
            <h6>Services</h6>
            <h3 className="fw4 m-b20">
              Teamcenter Active Work Space Development and Customization
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
                  alt="Mendix for Teamcenter"
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="m-t20">
                <p>
                  At Luminosa Technology, we offer comprehensive customization
                  and development services for Siemens Teamcenter and Active
                  Workspace. Our team of experienced professionals has extensive
                  expertise in both server-side development and UI
                  customization, ensuring that we can provide tailored solutions
                  that meet the unique needs of each of our clients.
                </p>

                <p>
                  Server-side development is a critical aspect of Teamcenter
                  customization, as it involves the creation and modification of
                  server-side extensions to the software. These extensions allow
                  for greater flexibility and functionality within the system,
                  enabling our clients to optimize their usage of the software
                  and improve their overall business performance.
                </p>

                <p>
                  In addition to server-side development, we also offer UI
                  customization services, allowing our clients to tailor the
                  look and feel of their Active Workspace interface to their
                  specific needs and preferences. This can include customizing
                  the layout, color scheme, and branding of the interface, as
                  well as adding new features and functionality.
                </p>

                <p>
                  Our team works closely with each of our clients to understand
                  their unique needs and goals, developing customized solutions
                  that deliver measurable results. We pride ourselves on our
                  attention to detail, our commitment to excellence, and our
                  ability to deliver projects on time and within budget.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-light p-40 radius-md">
            <p>
              So whether you're looking to enhance the functionality of your
              Teamcenter system, improve your user experience with Active
              Workspace, or simply optimize your usage of Siemens software, our
              team is here to help. Contact us today to learn more about our
              customization and development services and how we can help your
              business succeed.
            </p>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
};

export default TeamcenterDevelopmentCustomization;
