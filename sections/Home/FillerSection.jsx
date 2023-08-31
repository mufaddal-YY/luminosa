import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { PortableText } from "@portabletext/react";

const FillerSection = ({fillerData}) => {
  return (
    <section className="section-sp4 sectionBg">
      <div className="container">
        {fillerData.map((item) => (
          <div className="align-items-center m-t50 m-b20">
          <h3 className="fw3">
            <PortableText value={item.sectionDesc} />
            
          </h3>
        </div>
        )
        )}

        
        <Link href={"/services"} className="btn-secondary button-md radius-md">See all solutions <BsArrowRight/></Link>
      </div>
    </section>
  );
};

export default FillerSection;
