"use client";
import Cta from "@components/Cta"
import AboutHero from "@sections/About/AboutHero"
import OurStory from "@sections/About/OurStory"
import { getAboutData } from "@sanity/sanity-utils";

export default async function AboutPage() {

  const aboutData = await getAboutData();

  return (
    <>
    <AboutHero aboutData={aboutData}  />
    <OurStory aboutData={aboutData}  />
    <Cta/>
    </>
  )
}