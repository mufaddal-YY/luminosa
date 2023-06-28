import Cta from "@components/Cta";
import FillerSection from "@sections/Home/FillerSection";
import HeroBanner from "@sections/Home/HeroBanner";
import Industry from "@sections/Home/Industry";
import Services from "@sections/Home/Services";
import WhyLuminosa from "@sections/Home/WhyLuminosa";
import { getHomeData, getServices } from "@sanity/sanity-utils";

export default async function HomePage() {
  
  const homeData = await getHomeData();
  const servicesData = await getServices();

  return (
    <>
      <HeroBanner homeData={homeData} />
      <FillerSection fillerData={homeData} />
      <WhyLuminosa homeData={homeData} />
      <Services servicesData={servicesData} />
      <Industry homeData={homeData} />
      <Cta />
    </>
  );
}
