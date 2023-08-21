"use client";

import Image from "next/image";
import React from "react";

import { Oswald, Lato } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });

const NFTSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-[3rem]">
      <span
        className={`${oswald.className} text-white grow text-center text-5xl font-semibold`}
      >
        NFT UTILITIES
      </span>
      <Image
        alt=""
        src={"/assets/updated-assets/utilities.png"}
        width={444}
        height={581}
      />
    </div>
  );
};

export default NFTSection;
