import Cta from "@components/Cta";
import FillerSection from "@sections/Home/FillerSection";
import HeroBanner from "@sections/Home/HeroBanner";
import Industry from "@sections/Home/Industry";
import Services from "@sections/Home/Services";
import WhyLuminosa from "@sections/Home/WhyLuminosa";
import { getData } from "@sanity/sanity-utils";

export default async function HomePage() {
  const homeData = await getData();
  
  return (
    <>
      <HeroBanner homeData={homeData} />
      <FillerSection fillerData={homeData} />
      <WhyLuminosa homeData={homeData} />
      <Services />
      <Industry homeData={homeData} />
      <Cta />
    </>
  );
}
