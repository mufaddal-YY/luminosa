import Cta from "@components/Cta";
import CareerHero from "@sections/Careers/CareerHero";
import Openings from "@sections/Careers/Openings";
import { getCareersData } from "@sanity/sanity-utils";

export default async function CareersPage() {
  const careersData = await getCareersData();

  return (
    <>
      <CareerHero />
      <Openings careersData={careersData} />
      <Cta />
    </>
  );
}
