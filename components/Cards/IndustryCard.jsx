import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const IndustryCard = ({ name, image }) => {
  return (
    <div className="portfolio-box style-2 m-b30">
      <div className="portfolio-media ovpr-middle">
        <Image height={300} width={600} src={image} alt="" />
      </div>
      <div className="portfolio-info">
        <div className="d-flex justify-content-start">
          <div className="p-20">
            <h5 className="m-b0 text-white">
            {name}
            </h5>
            <hr className="bg-white m-t10 m-b0 border" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
