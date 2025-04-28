import heart from "../assets/heart-default.png";
import heartRed from "../assets/heart-red.png";
import { useState } from "react";

export default function Product({ name, imageSource, priceDollar, func }) {
  const [favorite, setFavorite] = useState(false);
  function toggleFavorite() {
    setFavorite((fav) => !fav);
  }
  return (
    <div className="flex flex-col items-center justify-center border-l-1 border-r-1 border-gray-300 w-[18vw] h-[24rem] mt-5">
      <img src={imageSource} alt="" className="w-[16rem] h-[12rem]" />
      <h2 className="font-bold mt-4">{name}</h2>
      <div className="flex flex-row  justify-around  w-[100%] h-[100%] items-center mt-[5rem]">
        <p className="p-2 bg-transparent font-bold text-xl text-red-500  rounded-xl">
          {priceDollar}$
        </p>
        <div className="flex flex-row items-center gap-2">
          <button
            onClick={func}
            className="cursor-pointer bg-gray-200 p-1 rounded border-1 border-gray-400 hover:bg-gray-300"
          >
            Add to Cart
          </button>
          <button onClick={toggleFavorite}>
            <img
              src={favorite ? heartRed : heart}
              alt="Heart"
              className="size-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
