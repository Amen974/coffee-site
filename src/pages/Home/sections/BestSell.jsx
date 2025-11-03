import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
const BestSell = () => {
  useGSAP(()=>{
    gsap.fromTo('.best-1',{
      x:300,
      opacity:0,
    },{
      x:0,
      opacity:1,
      ease:'power1.inOut',
      scrollTrigger:{
        trigger: '.best-1',
        start: 'top 80%',
        end:'top 50%',
        toggleActions: 'play none none none'
      }
    })

    gsap.fromTo(
      '.best-bg',
      { x: 300 },
      {
        x: 0,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.best-1',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

  },[])
  return (
    <section id="BestSell">
     <div className='relative bg-black h-[45vh] flex items-center justify-center max-sm:h-[30vh] max-md:h-[80vh] overflow-hidden'>
        <div className="absolute inset-0 bg-no-repeat bg-contain bg-right bg-[url('imgs/coffee-beans-right.png')] best-bg"></div>
        <h1 className="font-dancing text-red-700 text-[150px] font-bold max-sm:text-[100px] best-1 relative z-10">
          Best Sell
        </h1>
      </div>

      <div
        className="bg-black bg-no-repeat bg-contain bg-left h-[45vh] flex items-center justify-center max-sm:h-[30vh] max-sm:bg-cover max-md:h-[80vh]"
        style={{ backgroundImage: 'url("imgs/coffee-beans-left.png")' }}
      >
        <div className="flex items-center justify-center gap-11">
          <div>
            <Link to="">
              <img
                src="/imgs/americano (1).jpg"
                alt="Americano coffee"
                className="h-[190px] rounded-full max-sm:h-[135px]"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="text-white max-sm:flex-1">
            <h2 className="text-red-700 text-6xl font-dancing font-bold max-sm:text-5xl max-sm:mb-5 max-sm:mr-1">
              Americano
            </h2>
            <p className="max-w-[400px] my-[16px] max-sm:hidden">
              A smooth, rich coffee made by diluting a shot of espresso with hot
              water, giving you a bold flavor with a lighter body.
            </p>
            <Link
              to=""
              className="bg-red-700 text-[15px] p-[12px] rounded-[2px]"
            >
              Order now
            </Link>
          </div>
        </div>
      </div>

      <div
        className="bg-black bg-no-repeat bg-contain bg-right h-[45vh] flex items-center justify-center max-sm:h-[30vh] max-sm:bg-cover max-md:h-[80vh]"
        style={{ backgroundImage: 'url("imgs/coffee-beans-right.png")' }}
      >
        <div className="text-white max-sm:flex-1">
          <h2 className="text-red-700 text-6xl font-dancing font-bold max-sm:text-5xl max-sm:mb-5 max-sm:ml-1">
            Cortado
          </h2>
          <p className="max-w-[400px] my-[16px] max-sm:hidden">
            A Spanish classic: rich espresso gently 'cut' with a splash of
            steamed milk for perfect harmony.
          </p>
          <Link
            to=""
            className="bg-red-700 text-[15px] p-[12px] rounded-[2px] max-sm:ml-1"
          >
            Order now
          </Link>
        </div>
        <div>
          <Link to="">
            <img
              src="/imgs/Cortado.jpg"
              alt="Cortado coffee"
              className="h-[190px] rounded-full max-sm:h-[135px]"
              loading="lazy"
            />
          </Link>
        </div>
      </div>

      <div
        className="bg-black bg-no-repeat bg-contain bg-left h-[45vh] flex items-center justify-center max-sm:h-[30vh] max-sm:bg-cover max-md:h-[80vh]"
        style={{ backgroundImage: 'url("imgs/coffee-beans-left.png")' }}
      >
        <div className="flex items-center justify-center gap-11">
          <div>
            <Link to="">
              <img
                src="/imgs/creamy latte.jpg"
                alt="Creamy Latte coffee"
                className="h-[190px] rounded-full max-sm:h-[135px]"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="text-white max-sm:flex-1">
            <h2 className="text-red-700 text-6xl font-dancing font-bold max-sm:text-5xl max-sm:mb-5 max-sm:mr-1">
              Creamy Latte
            </h2>
            <p className="max-w-[400px] my-[16px] max-sm:hidden">
              A smooth balance of bold espresso and creamy milk, crafted for
              pure comfort in every sip.
            </p>
            <Link
              to=""
              className="bg-red-700 text-[15px] p-[12px] rounded-[2px]"
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
