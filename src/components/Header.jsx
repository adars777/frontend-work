// import React from 'react'
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <div className="relative w-full  bg-[#2A2A2D]">
        <div className="text-white flex gap-15 py-2 overflow-hidden whitespace-nowrap border-zinc-300 ">
          <motion.h1
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ ease: "easeOut", repeat: Infinity, duration: 8 }}
            className="text-[2vw]  uppercase leading-none font-semibold font-[inter-rg] text-xs"
          >
            USE CODE &#34;LUDIC10&#34; AT CHECKOUT &amp; GET 10% OFF ON YOUR
            FIRST SNEAKER PURCHASE
          </motion.h1>
        </div>
      </div>
      {/* navbar */}
      <div>
        <nav className="bg-[url('https://ludic.life/cdn/shop/files/BANNER_1_DESKTOP.jpg?v=1723470647')] bg-contain bg-no-repeat h-[90vh] flex justify-between px-5 py-6">
          <div>
            <img
              className="h-6"
              src="https://ludic.life/cdn/shop/files/ludic-logo_02ccc45e-e19b-4619-9e08-2cb9bce08661.png?v=1723549005"
              alt=""
            />
          </div>

          {/* links */}
          <ul className=" flex  gap-8">
            <li>
              <a
                href="#"
                className="text-white text-[1vw] font-[inter-rg]  transition-all hover:text-red-700 hover:transition-all
            "
              >
                SNEAKER
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-white text-[1vw] font-[inter-rg]  transition-all hover:text-red-700 hover:transition-all
            "
              >
                APPAREL
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-white text-[1vw] font-[inter-rg]   transition-all hover:text-red-700 hover:transition-all
            "
              >
                FRAGRANCE
              </a>
            </li>

            <li className=" hover:text-red-700">
              <a
                href="#"
                className="text-white text-[1vw] font-[inter-rg]  transition-all hover:text-red-700 hover:transition-all 
            "
              >
                COLLECTION
              </a>
            </li>
          </ul>

          {/* OTHER links */}
          <ul className=" flex justify-around gap-5">
            <li>
              <a
                href="#"
                className="text-white text-[1vw] font-[inter-rg] hover:text-red
            "
              >
                HELP
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-white text-[1vw] font-[inter-rg] hover:text-red
            "
              >
                BAG (0)
              </a>
            </li>
          </ul>

          <div className="flex flex-col items-center absolute top-1/3 left-[35%]">
            <div className="flex">
              <h1 className="font-[apw-bold] text-[3rem] text-white tracking-wide">
                RED MEANS GO
              </h1>
              <img
                className="h-5 "
                src="https://cdn.shopify.com/s/files/1/0630/6335/9642/files/starr.png?v=1723461807"
                alt=""
              />
            </div>
            {/* btn  */}
            <div className="flex justify-center">
              <button className="bg-red-600 mt-5 text-white font-[apw-bold] font-bold tracking-wide text-[1.2 rem] px-12 py-3">
                DISCOVER
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
