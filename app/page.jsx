import Cta from "@components/Cta"
import FillerSection from "@sections/Home/FillerSection"
import HeroBanner from "@sections/Home/HeroBanner"
import Industry from "@sections/Home/Industry"
import Services from "@sections/Home/Services"
import WhyLuminosa from "@sections/Home/WhyLuminosa"

const Home = () => {
  return (
    <>
    <HeroBanner/>
    <FillerSection/>
    <WhyLuminosa/>
    <Services/>
    <Industry/>
    <Cta/>
    
    </>
  )
}

export default Home