
import Image from "next/image";
import Cta from "@components/Cta";
import PortableText from "react-portable-text";
import { getServicesData } from "@sanity/sanity-utils";

export default async function ServicesPage({ params }) {

  const slug = params.service;
  const service = await getServicesData(slug);
  console.log(service);

  return (
    <>
      <section className="section-sp4">
        <div className="container">
          <div className="m-b0">
            <h6>Services</h6>

            <h3 className="fw4 m-b20">{service?.servicesTitle}</h3>
          </div>
          <hr />
          <div className="m-t10 m-b10">
            <Image
              className="radius-md"
              width={1080}
              height={500}
              src={service?.image}
              alt={service?.servicesTitle}
            />
          </div>
          <div className="m-t20">
            {service?.serviceDesc && (
              <PortableText
                // Pass in block content straight from Sanity.io
                content={service?.serviceDesc}
                projectId="jh3jibfq"
                dataset="production"
                // Optionally override marks, decorators, blocks, etc. in a flat
                // structure without doing any gymnastics
              />
            )}
          </div>
          <div className="bg-gray-light p-40 radius-md">
            <p>{service?.blockText}</p>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}