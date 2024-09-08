const Footer = () => {
  return (
    <>
      <div className=" bg-red-600 mb-5 pt-16">
        <div className=" flex flex-col gap-10  w-[97%] mx-auto">
          <div className="flex flex-col gap-5">
            <h1 className=" font-[apw-bold] text-white">#JoinLucidLife</h1>
            <p className=" flex flex-col font-[apw-bold] uppercase text-[#2a2a2d] text-[1.3rem]">
              <span>Play it our way this is the</span>
              <span>ludic life.</span>
            </p>
            <p className="flex flex-col text-xs font-[inter-rg] ">
              <span>
                A lifestyle for those always in motion. For the go-getters, and
                the
              </span>
              <span>
                path-carvers. We stay at pace with you, ready to seize the day.
              </span>
            </p>{" "}
          </div>

          <div className="flex ">
            <input
              className="bg-transparent border w-1/4 p-3 border-white"
              type="text"
              placeholder="Enter your email"
            />

            <button className=" border-white border border-l-0">
              <img
                className="h-7 w-auto px-8 "
                src="https://ludic.life/cdn/shop/t/27/assets/check-double-fill.svg?v=132954837462233129211713848115"
                alt=""
              />
            </button>
          </div>
          <hr />

          {/* links lists */}
          <div className="flex gap-5 justify-between text-white mr-32">
            <ul className="uppercase">
              <h1 className="uppercase  mb-5 text-sm  font-[apw-bold]">
                categories
              </h1>

              <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs relative cursor-pointer group overflow-hidden">
                New launch<sup>*</sup>
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2 origin-center"></span>
              </li>
              <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs relative cursor-pointer group overflow-hidden">
                sneaker
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2 origin-center"></span>
              </li>
              <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs relative cursor-pointer group overflow-hidden">
                apparel
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2 origin-center"></span>
              </li>
              <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs relative cursor-pointer group overflow-hidden">
                fragrance
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2 origin-center"></span>
              </li>
            </ul>

            <ul className="uppercase">
              <h1 className="uppercase  mb-5 text-sm  font-[apw-bold]">
                collections
              </h1>
              <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs relative cursor-pointer group overflow-hidden">
                dailymove
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2 origin-center"></span>
              </li>
              <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs relative cursor-pointer group overflow-hidden">
                futureworks
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2 origin-center"></span>
              </li>
            </ul>

            <ul className="uppercase">
              <h1 className="uppercase  mb-5 text-sm  font-[apw-bold]">help</h1>
              <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs relative cursor-pointer group overflow-hidden">
                track order
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2 origin-center"></span>
              </li>
              <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs relative cursor-pointer group overflow-hidden">
                return & exchange
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2 origin-center"></span>
              </li>
              <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs relative cursor-pointer group overflow-hidden">
                handle with care
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2 origin-center"></span>
              </li>
            </ul>
            <ul className="uppercase">
              <h1 className="uppercase  mb-5 text-sm  font-[apw-bold]">
                policies
              </h1>
              <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs relative cursor-pointer group overflow-hidden">
                privacy policy
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2 origin-center"></span>
              </li>
              <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs relative cursor-pointer group overflow-hidden">
                shipping & return policy
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2 origin-center"></span>
              </li>
              <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs relative cursor-pointer group overflow-hidden">
                terms & conditions
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2 origin-center"></span>
              </li>
            </ul>

            <ul className="uppercase">
              <h1 className="uppercase  mb-5 text-sm  font-[apw-bold]">
                brand
              </h1>
              <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs relative cursor-pointer group overflow-hidden">
                contact
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2 origin-center"></span>
              </li>
              {/* <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs ">careers</li> */}
              <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs relative cursor-pointer group overflow-hidden">
                careers
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2 origin-center"></span>
              </li>
            </ul>

            <ul className="uppercase">
              <h1 className="uppercase  mb-5 text-sm  font-[apw-bold]">
                follow
              </h1>
              <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs relative cursor-pointer group overflow-hidden">
                instagram
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2 origin-center"></span>
              </li>
              <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs relative cursor-pointer group overflow-hidden">
                youtube
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2 origin-center"></span>
              </li>
              <li className="font-[inter-rg] hover:text-black w-fit py-1 text-xs relative cursor-pointer group overflow-hidden">
                linkedin
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2 origin-center"></span>
              </li>
            </ul>
          </div>

          <hr className="border-black" />

          <div className="flex justify-between font[apw-rg] pb-5 text-sm">
            <p>#FactsOfAhmedabad</p>
            <p>
              Ahmedabad is the first UNESCO World Heritage City in India,
              designated in 2017.
            </p>
            <p>7 of many</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
