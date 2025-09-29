import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faChair, faBolt } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <section
      id="Services"
      className="flex flex-wrap items-center justify-evenly p-8 gap-8 min-h-[50vh] bg-black text-white"
    >
      <div className="flex-1 flex flex-col items-center justify-center max-w-[350px] min-w-[250px]">
        <FontAwesomeIcon
          icon={faMugHot}
          size="2x"
          className="text-amber-800 mb-3"
        />
        <p className="text-2xl font-semibold text-red-700 mb-2">
          Freshly Brewed
        </p>
        <p className="text-center">
          We use carefully selected beans and brew each cup to bring out its
          rich flavors. Every sip is smooth, aromatic, and made fresh just for
          you.
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center max-w-[350px] min-w-[250px]">
        <FontAwesomeIcon
          icon={faChair}
          size="2x"
          className="text-green-600 mb-3"
        />
        <p className="text-2xl font-semibold text-red-700 mb-2">
          Cozy Atmosphere
        </p>
        <p className="text-center">
          A warm space with comfy seating and relaxing vibes. Perfect for
          studying, working, or catching up with friends over coffee.
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center max-w-[350px] min-w-[250px]">
        <FontAwesomeIcon
          icon={faBolt}
          size="2x"
          className="text-amber-300 mb-3"
        />
        <p className="text-2xl font-semibold text-red-700 mb-2">
          Fast Service
        </p>
        <p className="text-center">
          Quick, friendly, and efficient. We make sure you get your coffee fast
          without losing any of the quality.
        </p>
      </div>
    </section>
  );
};

export default Services;
