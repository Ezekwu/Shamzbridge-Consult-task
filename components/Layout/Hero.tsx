import UiButton from "../Ui/UiButton"
import Wrapper from "../Ui/Wrapper"

export default function Hero() {
  return (
    <section className="hero pt-[60px] md:h-screen max-h-[800px] ">
      <Wrapper>
        <div className="text-white px-3 pt-11 md:pt-20 pb-16 md:px-6 md:text-center w-full lg:max-w-[60%] md:max-w-[80%] mx-auto">
          <h2 className="text-gray-100 text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-8 ">Building Strong Teams, Empowering Sustainable Growth.</h2>
          <p className="text-gray-100 text-sm md:text-base md:w-[80%] mx-auto mb-5 md:mb-10">At HRTouch, we connect you with top talent and provide innovative HR solutions to help your business thrive. </p>
          <div className="flex gap-4 md:mx-auto w-fit">
            <UiButton>Start Now</UiButton>
            <UiButton variant="secondary">Learn More</UiButton> 
          </div>  
        </div>
      </Wrapper>
    </section>
  )
}