import Image from "next/image";
import Cta from "@components/Cta";
import TC from "@public/migration.png";

const TeamcenterMigration = () => {
  return (
    <>
      <section className="section-sp4">
        <div className="container">
          <div className="m-b0 ">
            <h6>Services</h6>
            <h3 className="fw4 m-b20">Teamcenter Migration</h3>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-5">
              <div className="m-t10 m-b10">
                <Image
                  className="radius-md"
                  width={1080}
                  height={500}
                  src={TC}
                  alt="Teamcenter Migration"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="m-t20">
                <p>
                  Data migration is crucial aspect of implementing Teamcenter,
                  as it involves transferring existing product data legacy
                  systems or other sources into Teamcenter
                </p>

                <p>
                  Migration is the process by which product lifecycle data is
                  transferred to a new or existing PLM system because of
                  consolidation, system end of life, or current system upgrade.
                </p>

                <p>
                  Data Migration is the process of moving the data from one
                  location to another, one format to another, or one application
                  to another.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-light p-40 radius-md">
            <p>
              At Luminosa Technology, we are committed to delivering
              high-quality services that exceed our clients&#39; expectations.
              Our Teamcenter migration services have helped clients across
              various industries to streamline their PLM processes, improve data
              quality and consistency, and enhance collaboration and innovation.
              With our expertise and experience, we can help your organization
              achieve a successful and seamless migration to Teamcenter,
              allowing you to focus on your core business activities and achieve
              your goals.
            </p>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
};

export default TeamcenterMigration;
