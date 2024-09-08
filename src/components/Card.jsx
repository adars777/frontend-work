import { useState } from "react";

const Card = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div className="w-80 mb-6">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={isHovered ? data.img[1] : data.img[0]} alt="" />
          <div className=" flex justify-between relative max-w-sm  overflow-hidden shadow-lg bottom-8">
            <p className=" font-[inter-bold] text-base bg-red-600 text-white px-4 py-1">
              {data.disc}%OFF
            </p>

            <img
              className="h-7 cursor-pointer"
              src="https://ludic.life/cdn/shop/t/27/assets/add-circle-line.svg?v=86569287413221507431713847307"
              alt=""
            />
          </div>
        </div>

        <div className=" flex flex-col justify-center text-center ">
          <p className="text-base font-[apw-bold] text-[1rem] uppercase">
            {data.name}
          </p>
          <p className="text-[0.9rem] font-[inter-bold] text-[#939597] uppercase">
            {data.desc}
          </p>
          <p>
            <span className=" line-through font-[inter-bold]">
              {" "}
              ₹{data.price}
            </span>{" "}
            <span className=" font-[inter-bold] text-red-600">
              ₹{(data.price - (data.price * data.disc) / 100).toFixed(0)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
