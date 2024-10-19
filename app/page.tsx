import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Hero from "@/components/Layout/Hero";
import AboutUs from "@/components/Layout/AboutUs";
import Services from "@/components/Layout/Services";
// import Mission from "@/components/Layout/Mission";
export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Services/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}
