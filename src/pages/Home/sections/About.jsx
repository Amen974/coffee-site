import { useRef } from "react";
import RatingCart from "../../../component/RatingCart";
import { clientReviews } from "../../../constent";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const trackRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;
    
    let halfWidth = track.scrollWidth / 2;

    gsap.to(track, { x: -halfWidth, repeat: -1, duration: 20, ease: "linear" });

    gsap.to('.S-proogf',{opacity:1,scrollTrigger:{trigger:'.S-proogf', start:'top 50%'}})

  }, []);
  return (
    <section className="bg-black h-[60vh] text-white">
      <h2 className="text-center text-5xl font-bold text-red-600 dancing-script opacity-0 S-proogf">
        Your Social Proof
      </h2>
      <div className="flex items-center overflow-hidden h-[50vh] opacity-0 S-proogf">
        <div className="flex gap-6" ref={trackRef}>
          {clientReviews.map((cart) => (
            <RatingCart
              key={cart.id}
              img={cart.img}
              stars={cart.stars}
              name={cart.name}
              review={cart.review}
              date={cart.date}
            />
          ))}

          {clientReviews.map((cart) => (
            <RatingCart
              key={cart.id + "-dup"}
              img={cart.img}
              stars={cart.stars}
              name={cart.name}
              review={cart.review}
              date={cart.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
