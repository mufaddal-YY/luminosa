import Image from "next/image";
import WhyLumi from '@public/whyLuminosa.png'
const WhyLuminosa = () => {
  return (
    <section className="section-sp4 bg-gray-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="p-20">
              <Image width={500} height={500} src={WhyLumi} alt="Why luminosa" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 align-items-center">
            <div className="p-20 m-t20">
              <h3 className="fw4 m-b20">
                Why <strong>Luminosa</strong> <br className="hidden" /> Technology?
              </h3>
              <hr className="border-small" />
              <p>
                Partnering with Luminosa Technology means unlocking the power of
                digital transformation for your business, leveraging
                cutting-edge PLM solutions and low-code development to drive
                growth and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLuminosa;
