import Image from "next/image";
import Cta from "@components/Cta";
import PortableText from "react-portable-text";
import { getServicesData } from "@sanity/sanity-utils";


export default async function ServicesPage({ params }) {

  const services = await getServicesData(params.slug);
  console.log(services);

  

  return (
    <>
      <section className="section-sp4">
        <div className="container">
          <div className="m-b0">
            <h6>Services</h6>

            <h3 className="fw4 m-b20">{services?.serviceTitle}</h3>
          </div>
          <hr />
          <div className="m-t10 m-b10">
            <Image
              className="radius-md"
              width={1080}
              height={500}
              src={services?.image}
              alt={services.serviceTitle}
            />
          </div>
          <div className="m-t20">
            <p className="m-b20">
              <PortableText
                // Pass in block content straight from Sanity.io
                content={services?.serviceDesc}
                projectId="jh3jibfq"
                dataset="production"
                // Optionally override marks, decorators, blocks, etc. in a flat
                // structure without doing any gymnastics
              />
              {/* <PortableText
                components={components}
                value={services?.serviceDesc}
              /> */}
            </p>
          </div>
          <div className="bg-gray-light p-40 radius-md">
            <p>{services?.blockText}</p>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
