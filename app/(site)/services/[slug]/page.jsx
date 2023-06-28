import Image from "next/image";
import Cta from "@components/Cta";
import PortableText from "react-portable-text";
import { getServicesData } from "@sanity/sanity-utils";

export default async function ServicesPage({ services, params }) {
  const { servicesTitle, image, serviceDesc, blockText } = services;

  return (
    <>
      <section className="section-sp4">
        <div className="container">
          <div className="m-b0">
            <h6>Services</h6>

            <h3 className="fw4 m-b20">{servicesTitle}</h3>
          </div>
          <hr />
          <div className="m-t10 m-b10">
            {image && (
              <Image
                className="radius-md"
                width={1080}
                height={500}
                src={image}
                alt={servicesTitle}
              />
            )}
          </div>
          <div className="m-t20">
            {serviceDesc && (
              <PortableText
                content={serviceDesc}
                projectId="jh3jibfq"
                dataset="production"
              />
            )}
          </div>
          <div className="bg-gray-light p-40 radius-md">
            <p>{blockText}</p>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
