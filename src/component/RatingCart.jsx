import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";

const RatingCart = ({ img, stars, name, review, date }) => {
  const star = [];
  
  // Fixed star rating logic
  for (let i = 0; i < 5; i++) {
    if (stars >= i + 1) {
      star.push(<MdStar key={i} className="text-amber-400 text-[20px]" />);
    } else if (stars >= i + 0.5) {
      star.push(<MdStarHalf key={i} className="text-amber-400 text-[20px]" />);
    } else {
      star.push(<MdStarBorder key={i} className="text-amber-400 text-[20px]" />);
    }
  }
  
  return (
    <div className="w-[400px] h-[200px] rounded-lg bg-[#111] border-2 border-red-700 p-3 flex flex-col">
      {/* top */}
      <div className="flex items-start">
        <img src={img} alt={name} width={50} className="mr-3 rounded-full" />
        <div className="flex-1">
          <p className="font-semibold">{name}</p>
          <p className="text-gray-400 text-sm">{date}</p>
        </div>
      </div>
      
      {/* bottom */}
      <div className="flex flex-col gap-2 mt-3">
        <div className="flex">{star}</div>
        <p className="text-gray-300 line-clamp-3">{review}</p>
      </div>
    </div>
  );
};

export default RatingCart;