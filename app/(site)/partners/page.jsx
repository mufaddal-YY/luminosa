"use client";
import Cta from "@components/Cta";
import GetInTouch from "@sections/Partners/GetInTouch";
import HeroPartners from "@sections/Partners/HeroPartners";
import Support from "@sections/Partners/Support";
import { getPartnersData } from "@sanity/sanity-utils";

export default async function PartnersPage() {
  
  const partnersData = await getPartnersData();

  return (
    <>
      <HeroPartners partnersData={partnersData} />
      <Support partnersData={partnersData} />
      <GetInTouch />
      <Cta />
    </>
  );
}
