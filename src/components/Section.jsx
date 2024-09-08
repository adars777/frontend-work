import Card from "./Card";
import { shoes, tshirt, fragrances } from "../data.js";

const Section = () => {
  return (
    <>
      {/* section 1 */}
      <div>
        <div className="flex justify-between px-5">
          <h2 className="font-[apw-bold] uppercase text-[#2a2a2d]">Sneaker</h2>
          <button className="font-[apw-md] font-medium text-[0.8rem] tracking-wide text-[#2a2a2d] border px-5 py-2 border-black bg-transparent hover:bg-red-600 hover:text-white hover:border-transparent">
            VIEW ALL
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between px-5 py-4 gap-4">
        {shoes.map((shoe, index) => (
          <Card key={index} data={shoe} />
        ))}
      </div>

      {/* section 2  */}
      <div className="mt-3">
        <img
          src="https://ludic.life/cdn/shop/files/BANNER_2_DESKTOP.jpg?v=1723544819"
          alt=""
        />
        <div className="relative bottom-[63vh] flex flex-col gap-4 w-fit left-[59%]">
          <h1 className=" font-[apw-bold] text-white text-[2.5rem] flex flex-col">
            <span className="tracking-wide">Designed by us,</span>
            <span className="tracking-wide">developed for you,</span>
            <span className="tracking-wide">produced in india.</span>
          </h1>{" "}
          <button className=" bg-red-600 text-white font-[inter-bold] px-7 py-3 rounded-lg border-none w-fit">
            View Collection
          </button>{" "}
        </div>
      </div>

      {/* apperal list */}
      <div className="relative -mt-40">
        <div className="flex justify-between px-5">
          <h2 className="font-[apw-bold] uppercase text-[#2a2a2d]">apparel</h2>
          <button className="font-[apw-md] font-medium text-[0.8rem] tracking-wide text-[#2a2a2d] border px-5 py-2 border-black bg-transparent hover:bg-red-600 hover:text-white hover:border-transparent">
            VIEW ALL
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between px-5 py-4 gap-4 relative">
        {tshirt.map((tshirt, index) => (
          <Card key={index} data={tshirt} />
        ))}
      </div>

      {/* section 3  */}

      {/* apperal list */}
      <div className="relative mt-5">
        <div className="flex justify-between px-5">
          <h2 className="font-[apw-bold] uppercase text-[#2a2a2d]">
            fragrances
          </h2>
          <button className="font-[apw-md] font-medium text-[0.8rem] tracking-wide text-[#2a2a2d] border px-5 py-2 border-black bg-transparent hover:bg-red-600 hover:text-white hover:border-transparent">
            VIEW ALL
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between px-5 py-4 gap-4 relative">
        {fragrances.map((fragrances, index) => (
          <Card key={index} data={fragrances} />
        ))}
      </div>
    </>
  );
};

export default Section;
