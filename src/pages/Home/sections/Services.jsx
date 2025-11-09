import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faChair, faBolt } from "@fortawesome/free-solid-svg-icons";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)
const Services = () => {

  useGSAP(()=>{
    const paraSplit = new SplitText('.servece-para',{type:'lines'});
    const titleSplit = new SplitText('.servece-title',{type:'chars, words'}); 

    const tl = gsap.timeline({
    scrollTrigger:{
      trigger: '#Services',
      start: 'top 70%',
      end: 'bottom 20%'
    }
  })
  tl.fromTo('.icon',{y: -200,opacity:0},{y:0, opacity:1, ease:'power1.in'})
    .fromTo(titleSplit.chars,{opacity:0},{opacity:1, stagger:0.03, duration: 0.02, ease:'power1.inOut'},'-=0.2')
    .fromTo(paraSplit.lines,{opacity:0},{opacity:1, stagger:0.03, duration: 0.2, ease:'power1.inOut'},'-=0.2')
  },[])
  

  return (
    <section
      id="Services"
      className="flex flex-wrap items-center justify-evenly p-8 gap-8 min-h-[50vh] bg-black text-white"
    >
      <div className="flex-1 flex flex-col items-center justify-center max-w-[350px] min-w-[250px]">
        <FontAwesomeIcon
          icon={faMugHot}
          size="2x"
          className="text-amber-800 mb-3 icon"
        />
        <p className="text-2xl font-semibold text-red-700 mb-2 servece-title">
          Freshly Brewed
        </p>
        <p className="text-center servece-para">
          We use carefully selected beans and brew each cup to bring out its
          rich flavors. Every sip is smooth, aromatic, and made fresh just for
          you.
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center max-w-[350px] min-w-[250px]">
        <FontAwesomeIcon
          icon={faChair}
          size="2x"
          className="text-green-600 mb-3 icon"
        />
        <p className="text-2xl font-semibold text-red-700 mb-2 servece-title">
          Cozy Atmosphere
        </p>
        <p className="text-center servece-para">
          A warm space with comfy seating and relaxing vibes. Perfect for
          studying, working, or catching up with friends over coffee.
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center max-w-[350px] min-w-[250px]">
        <FontAwesomeIcon
          icon={faBolt}
          size="2x"
          className="text-amber-300 mb-3 icon"
        />
        <p className="text-2xl font-semibold text-red-700 mb-2 servece-title">
          Fast Service
        </p>
        <p className="text-center servece-para">
          Quick, friendly, and efficient. We make sure you get your coffee fast
          without losing any of the quality.
        </p>
      </div>
    </section>
  );
};

export default Services;
