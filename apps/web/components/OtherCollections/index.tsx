import React from "react";
import Image from "next/image";
import { Oswald, Lato } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const OtherCollectionsSection = () => {
  return (
    <div className="flex justify-center items-center h-auto py-[2rem] w-full">
      <div className="flex flex-col justify-center items-center max-w-[1200px] gap-8 grow">
        <span
          className={`${oswald.className} text-white grow text-center text-5xl font-semibold`}
        >
          Other Collections
        </span>
        <div className="flex flex-wrap justify-between px-8 w-full gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              alt=""
              src={"/assets/banner_left.webp"}
              width={500}
              height={500}
            />
            <div className="flex flex-col justify-center items-center">
              <h1
                className={`${oswald.className} text-2xl text-white uppercase font-semibold`}
              >
                2023 WSOP
              </h1>
              <p
                className={`${lato.className} font-medium text-[#A939FF] text-lg`}
              >
                Past Collection
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherCollectionsSection;
