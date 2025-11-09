import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
const BestSell = () => {
  useGSAP(()=>{
    gsap.fromTo('.best1',{
      x:300,
      opacity:0,
    },{
      x:0,
      opacity:1,
      ease:'power1.inOut',
      scrollTrigger:{
        trigger: '.best1',
        start: 'top 70%', 
      }
    })

    const americanoTl = gsap.timeline({
      scrollTrigger:{
        trigger: '.best2',
        start: 'top 70%', 
      }
    })

    americanoTl.fromTo('.best2',{x:-300, opacity:0,},{x:0, opacity:1, ease:'power1.inOut',})
               .fromTo('.americano-elm',{opacity: 0},{opacity:1,},)
    
    const creamyLatteTl = gsap.timeline({
      scrollTrigger:{
        trigger: '.creamy-latte',
        start: 'top 70%', 
      }
    })

    creamyLatteTl.fromTo('.creamy-latte',{x:-300, opacity:0,},{x:0, opacity:1, ease:'power1.inOut',})
                 .fromTo('.creamy-elm',{opacity: 0},{opacity:1,},)
    
    const cortadoTl = gsap.timeline({
      scrollTrigger:{
        trigger: '.cortado',
        start: 'top 70%', 
      }
    })

    cortadoTl.fromTo('.cortado',{x:300, opacity:0,},{x:0, opacity:1, ease:'power1.inOut',})
             .fromTo('.cortado-elm',{opacity: 0},{opacity:1,},)
  },[])
  return (
    <section id="BestSell">
      <div className='bg-black h-[45vh] flex items-center justify-center max-sm:h-[30vh] max-sm:bg-cover max-md:h-[80vh] relative overflow-hidden'>
        <img src="/imgs/coffee-beans-right.png" alt="right-beans" className="absolute right-0 h-full object-contain best1" />
        <h1 className="font-dancing text-red-700 text-[150px] font-bold max-sm:text-[100px] z-10 best1">
          Best Sell
        </h1>
      </div>

      {/* Americano section */}
      <div className="bg-black h-[45vh] flex items-center justify-center max-sm:h-[30vh] max-sm:bg-cover max-md:h-[80vh] relative overflow-hidden">
        <img src="/imgs/coffee-beans-left.png" alt="left-beans" className="absolute left-0 h-full object-contain best2" />
        <div className="flex items-center justify-center gap-11 relative z-10">
          <div>
            <Link to="">
              <img
                src="/imgs/americano (1).jpg"
                alt="Americano coffee"
                className="h-[190px] rounded-full max-sm:h-[135px] americano-elm"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="text-white max-sm:flex-1">
            <h2 className="text-red-700 text-6xl font-dancing font-bold max-sm:text-5xl max-sm:mb-5 max-sm:mr-1 best2">
              Americano
            </h2>
            <p className="max-w-[400px] my-[16px] max-sm:hidden best2">
              A smooth, rich coffee made by diluting a shot of espresso with hot
              water, giving you a bold flavor with a lighter body.
            </p>
            <Link to="" className="bg-red-700 text-[15px] p-[12px] rounded-[2px] americano-elm">
              Order now
            </Link>
          </div>
        </div>
      </div>

      {/* Cortado section */}
      <div className="bg-black h-[45vh] flex items-center justify-center max-sm:h-[30vh] max-sm:bg-cover max-md:h-[80vh] relative overflow-hidden">
        <img src="/imgs/coffee-beans-right.png" alt="right-beans" className="absolute right-0 h-full object-contain cortado" />
        <div className="flex items-center justify-center gap-11 relative z-10">
          <div className="text-white max-sm:flex-1">
            <h2 className="text-red-700 text-6xl font-dancing font-bold max-sm:text-5xl max-sm:mb-5 max-sm:ml-1 cortado">
              Cortado
            </h2>
            <p className="max-w-[400px] my-[16px] max-sm:hidden cortado">
              A Spanish classic: rich espresso gently 'cut' with a splash of
              steamed milk for perfect harmony.
            </p>
            <Link
              to=""
              className="bg-red-700 text-[15px] p-[12px] rounded-[2px] max-sm:ml-1 cortado-elm"
            >
              Order now
            </Link>
          </div>
          <div>
            <Link to="">
              <img
                src="/imgs/Cortado.jpg"
                alt="Cortado coffee"
                className="h-[190px] rounded-full max-sm:h-[135px] cortado-elm"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Creamy Latte section */}
      <div className="bg-black h-[45vh] flex items-center justify-center max-sm:h-[30vh] max-sm:bg-cover max-md:h-[80vh] relative overflow-hidden">
        <img src="/imgs/coffee-beans-left.png" alt="left-beans" className="absolute left-0 h-full object-contain creamy-latte" />
        <div className="flex items-center justify-center gap-11 relative z-10">
          <div>
            <Link to="">
              <img
                src="/imgs/creamy latte.jpg"
                alt="Creamy Latte coffee"
                className="h-[190px] rounded-full max-sm:h-[135px] creamy-elm"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="text-white max-sm:flex-1">
            <h2 className="text-red-700 text-6xl font-dancing font-bold max-sm:text-5xl max-sm:mb-5 max-sm:mr-1 creamy-latte">
              Creamy Latte
            </h2>
            <p className="max-w-[400px] my-[16px] max-sm:hidden creamy-latte">
              A smooth balance of bold espresso and creamy milk, crafted for
              pure comfort in every sip.
            </p>
            <Link
              to=""
              className="bg-red-700 text-[15px] p-[12px] rounded-[2px] creamy-elm"
            >
              Order now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSell;
