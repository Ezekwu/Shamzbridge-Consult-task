import Wrapper from "../Ui/Wrapper";
import MissionImg from '@/public/assets/Mission.png';
import VisionImg from '@/public/assets/vision.png';
import Image from "next/image";
import UiButton from "../Ui/UiButton";
import UiIcon from "../Ui/UiIcon";

export default function AboutUs() {
  const missionAndVision = [
    {
      title: 'Mission',
      img: MissionImg,
      text: 'Our mission is to empower organizations by providing innovative human resource solutions that foster a productive, engaged, and diverse workforce. We aim to streamline HR processes, from talent acquisition to employee development, enabling companies to focus on what matters most.'
    },
    {
      title: 'Vision',
      img: VisionImg,
      text: 'Our vision is to be a leading HR partner, driving the future of work by connecting companies with top talent and building strong, inclusive workplaces. We aspire to create a world where every organization thrives with a dedicated and empowered workforce, supported by cutting-edge HR technology and services',
      flexReverse: true
    }
  ]

  return (
    <section className="py-8 md:py-10 px-3 md:px-6">
      <Wrapper>
        <div>
          <h3  className="md:text-center text-2xl sm:text-3xlfont-semibold w-[80%] md:w-[40%] md:mx-auto text-slate-800 md:text-4xl mb-5 md:mb-8 mt-4 md:mt-8">About Us</h3>
          <p className="md:text-center mb-10 md:mb-16 w-[90%] md:w-[60%] md:mx-auto text-sm md:text-base text-slate-500">Our <span className="text-primary-base font-medium">mission</span> and <span className="text-primary-base font-medium">vision</span> reflect our commitment to helping businesses build and sustain high-performing teams. </p>

          <div className="flex flex-col gap-7 md:gap-24 max-w-[1400px] mx-auto">
            {missionAndVision.map((section) => (
              <section className={`flex flex-col lg:flex-row  ${section.flexReverse && 'lg:flex-row-reverse'} gap-8 md:gap-20 items-center lg:w-[80%] lg:mx-auto`} key={section.title}>
                <Image className="max-w-full " src={section.img} alt={section.title}/>
                <div className="w-full">
                  <h4 className="text-3xl font-semibold mb-9 text-slate-800">{section.title}</h4>
                  <p className="text-sm md:text-base text-slate-500 mb-2">{section.text}</p>
                  <UiButton variant="secondary-text" injectedClasses="400 !px-0">learn more <UiIcon icon="ArrowRight" size="20"/></UiButton>
                </div>
              </section>
            ))}
          </div>

        </div>
      </Wrapper>
    </section>
  )
}