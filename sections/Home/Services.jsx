import ServiceCard from "@components/Cards/ServiceCard";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";


const Services = ({ servicesData }) => {
  return (
    <section className="section-sp4">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between ">
          <div className="m-b0">
            <h3 className="fw4">
             
              <strong>Services</strong> we provide
            </h3>
          </div>
          <div className="flex-column">
            <Link
              href={"/services"}
              className="btn-secondary button-md radius-md m-t20 m-b20">
              View All <BsArrowRight />
            </Link>
          </div>
        </div>
        <hr className="border-small" />
        <div className="m-t20 m-b20">
          <div className="row">
            {servicesData.slice(0, 8).map((item) => (
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="p-10">
                  <ServiceCard
                    link={`/services/${item.slug}`}
                    name={item?.servicesTitle}
                    image={item.thumbImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Services;
