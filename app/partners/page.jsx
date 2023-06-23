import Cta from "@components/Cta";
import GetInTouch from "@sections/Partners/GetInTouch";
import HeroPartners from "@sections/Partners/HeroPartners";
import Support from "@sections/Partners/Support";

const page = () => {
  return (
    <>
      <HeroPartners />
      <Support />
      <GetInTouch />
      <Cta/>
    </>
  );
};

export default page;
