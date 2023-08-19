import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Oswald, Lato } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });

const PastCollection = () => {
  return (
    <div className="flex justify-center items-center h-auto py-[2rem] bg-[#67239b]/50 w-full">
      <div className="flex flex-col justify-center items-center max-w-[1200px] gap-4">
        <span
          className={`${oswald.className} text-white grow text-center text-5xl font-semibold`}
        >
          Past Collections
        </span>
        <div className="banner flex flex-wrap">
          <Image
            alt=""
            src={"/assets/banner_left.webp"}
            width={604}
            height={581}
          />

          <Image
            alt=""
            src={"/assets/banner_right.webp"}
            width={444}
            height={581}
          />
        </div>
        <span className="grow text-center text-white/50 text-[10px] leading-[12px]">
          PokerNews. (n.d.). 2023 WSOP [Online article]. Retrieved from{" "}
          <Link
            href={"https://www.pokernews.com/tours/wsop/2023-wsop/"}
            className="underline"
          >
            https://www.pokernews.com/tours/wsop/2023-wsop/
          </Link>
        </span>
      </div>
    </div>
  );
};

export default PastCollection;
