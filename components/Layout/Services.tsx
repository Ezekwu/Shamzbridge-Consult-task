import Wrapper from "../Ui/Wrapper";
import ServiceCard from "../Services/ServiceCard";
import { servicesData } from "@/Utils/constants";

export default function Services() {


  return (
    <Wrapper>
      <section className="py-8 md:py-10 px-3 md:px-6">
        <h3 className="md:text-center text-2xl sm:text-3xlfont-semibold w-[80%] md:w-[40%] md:mx-auto text-slate-800 md:text-4xl mb-5 md:mb-8mt-4 md:mt-8">Explore Our  Human  Resource <span className="text-primary-base">Services</span></h3>
        <p className="md:text-center mb-10 md:mb-16 w-[90%] md:w-[60%] md:mx-auto text-sm md:text-base text-slate-500">At <span className="text-primary-base font-medium">HRTouchAt</span>, we offer powerful HR solutions to simplify your workflow, boost employee engagement, and support your business growth.</p>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5 lg:w-full xl:w-[85%] mx-auto">
          {servicesData.map((service) => (
            <ServiceCard service={service} key={service.title}/>
          ))}
        </div>
      </section>
    </Wrapper>
    
  )
}