import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  useGSAP(()=>{
    const tl = gsap.timeline({defaults: {ease:'power1.inOut'}});
    
    tl.to('.title',{opacity:1, y:0})
      .to('.sub-title',{opacity:1, y:0}, '-=0.2')
      .fromTo('.para',{opacity:0, y:20},{opacity:1, y:0}, '-=0.2')
      .fromTo('.button',{opacity:0, y:20},{opacity:1, y:0}, '-=0.4')
      .fromTo('.num',{opacity:0, y:20},{opacity:1, y:0}, '-=0.3')
      .fromTo('.des',{opacity:0, y:20},{opacity:1, y:0}, '-=0.4')
  },[])

  return (
    <section
      id="Hero"
      className="h-[100vh] max-md:h-[110vh] max-sm:h-[80vh] bg-no-repeat bg-cover bg-center flex justify-center items-center bg-black"
      style={{ backgroundImage: 'url("/imgs/coffee-beans-1(1) try.webp")' }}
      rel="preload"
    >
      <div className="flex flex-col items-center max-w-162 max-md:max-w-125">
        <h1 className="text-red-600 font-dancing font-bold text-7xl mb-2 max-md:text-5xl max-md:mb-0 opacity-0 translate-y-10 title">
          A sip of joy
        </h1>
        <p className="text-2xl text-white max-md:text-[19px] max-md:mb-0 opacity-0 translate-y-10 sub-title">
          A unique world of flavers
        </p>
        <p className="text-white text-[1rem] text-center mb-6 para">
          Discover freshly roasted coffee crafted with passion, sourced from the
          finest farms around the world. Whether you crave a bold espresso or a
          smooth, creamy latte, every cup is brewed to awaken your senses and
          brighten your day.
        </p>
        <div className="flex gap-4 justify-center items-center mt-1 mb-7 max-md:mb-2 button">
          <HashLink
            to="#Menu"
            className="text-white bg-red-700 text-[1rem] px-5 py-2 rounded-md shadow-md hover:bg-red-800"
          >
            Eplore more
          </HashLink>
          <HashLink
            to="#Services"
            className="bg-white text-[15px] px-5 py-2 rounded-md shadow-md hover:bg-gray-200"
          >
            Learn more
          </HashLink>
        </div>
        <div className="flex gap-8 text-green-700 px-6 py-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-brown-800 num">50k+</h2>
            <p className="text-sm text-gray-400 des">Happy Customers</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-brown-800 num">100%</h2>
            <p className="text-sm text-gray-400 des">Organic Beans</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-brown-800 num">10+</h2>
            <p className="text-sm text-gray-400 des">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
