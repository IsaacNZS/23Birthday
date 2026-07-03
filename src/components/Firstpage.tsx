import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";

const Firstpage = () => {
  const [showButton, setShowButton] = useState(false);
  const [play] = useSound("./next.mp3");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 4000); // 3000ms = 3 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full relative h-screen pb-5 overflow-y-auto flex flex-col gap-2 items-center justify-center">
      <p className="text-[#8a570a] text-4xl font-bold">🎉Happy🎉</p>
      <p className="font-poppins text-7xl text-[#5d3d0d] ">Birthday</p>
      <img
        src="./3.jpg"
        alt=""
        className="w-70 h-70 rounded-full object-cover"
      />
      <p className="font-shadow text-3xl text-[#5d431b] font-bold ">
        💓 Naw Zuly Sharr 💓
      </p>
      <p className="font-shadow text-xl animate-bounce text-[#bf00ff] font-bold ">
        🥺 ( Thae Tay Tay Lay ) 🥺
      </p>
      <img
        src="./cake.gif"
        alt=""
        className="w-full absolute -z-10 bottom-2 h-50 object-cover"
      />
      <img
        src="./bollons.gif"
        alt=""
        className="absolute w-30 -z-10 h-40 top-5 left-0"
      />
      <img
        src="./bollons.gif"
        alt=""
        className="absolute -scale-x-100 w-30 -z-10 h-40 top-5 right-0"
      />
      <img
        src="./bollons.gif"
        alt=""
        className="absolute w-30 h-40 top-65 right-0"
      />
      <div
        className={`transition-opacity duration-1000 ${
          showButton ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link
          to={"/second"}
          onClick={() => play()}
          className="px-4 py-2 animate-pulse rounded-[10px] bg-pink-700 text-white text-lg font-bold"
        >
          Let Start!🥺💓
        </Link>
      </div>
    </div>
  );
};

export default Firstpage;
