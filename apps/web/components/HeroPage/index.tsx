"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Oswald, Lato } from "next/font/google";
import PastCollection from "components/PastCollections";
const oswald = Oswald({ subsets: ["latin"] });

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const TEAM_LOC_DATA = [
  {
    name: "Anson Tsang",
    imgUrl: "/assets/team-loc-assets/profile_anson.webp",
    title: "",
    achievement: "3 Times WSOP Bracelet Winner",
    livewinnings: "Live Tournament Winnings: 3.2M",
    classname: "p-2 lg:-mt-14",
    henbobUrl: "https://pokerdb.thehendonmob.com/player.php?a=r&n=134003",
    youtubeUrl: "",
    wsopUrl: "https://www.wsop.com/players/profile/?playerid=236667",
    somuchpokerUrl: "https://somuchpoker.com/player/yan-shing-anson-tsang/",
    pokernewsUrl: "",
  },

  {
    name: "Sparrow Cheung",
    imgUrl: "/assets/team-loc-assets/profile_sparrow.webp",
    title: "",
    achievement: "Champion of APPT Main Event",
    livewinnings: "Live Tournament Winnings: 1.9M",
    className: "p-11 lg:mt-16",

    henbobUrl: "https://pokerdb.thehendonmob.com/player.php?a=r&n=167390",
    youtubeUrl: "",
    wsopUrl: "",
    somuchpokerUrl: "https://somuchpoker.com/player/park-yu-sparrow-cheung/",
    pokernewsUrl: "",
  },

  {
    name: "Vincent Li",
    imgUrl: "/assets/team-loc-assets/profile_vincent.webp",
    title: "Co-Founder of LoC",
    achievement: "Champion Of Wynn Summer Classic Main Event",
    livewinnings: "Live Tournament Winnings: 1M",
    classname: "row-start-2 p-2 lg:-mt-14",
    henbobUrl: "https://pokerdb.thehendonmob.com/player.php?a=r&n=274313",
    youtubeUrl: "",
    wsopUrl: "",
    somuchpokerUrl: "",
    pokernewsUrl:
      "https://www.pokernews.com/news/2018/06/li-and-coombe-chop-the-wynn-summer-classic-1100-nlh-1m-gtd-31178.htm",
  },

  {
    name: "Alan Lau",
    imgUrl: "/assets/team-loc-assets/profile_alan.webp",
    title: "PorkerStars Red Dragon &",
    subTitle: "ACOP Main Event Double Crown",
    achievement: "PokerStars Asian Player of the Year (APOY)",
    livewinnings: "Live Tournament Winnings: 2M",
    classname: "row-start-2 p-2 lg:mt-14",
    henbobUrl: "https://pokerdb.thehendonmob.com/player.php?a=r&n=374429",
    youtubeUrl: "",
    wsopUrl: "",
    somuchpokerUrl:
      "https://somuchpoker.com/mpc-26-alan-lau-wins-the-red-dragon-for-hk32m/",
    pokernewsUrl: "",
  },

  {
    name: "Ivan Lee",
    imgUrl: "/assets/team-loc-assets/profile_ivan.webp",
    title: "",
    achievement: "Champion of WPT Super Highroller",
    livewinnings: "Live Tournament Winnings: 1.3M",
    classname: "row-start-3 p-2 lg:-mt-14",
    henbobUrl: "https://pokerdb.thehendonmob.com/player.php?a=r&n=136105",
    youtubeUrl: "",
    wsopUrl: "",
    somuchpokerUrl:
      "https://somuchpoker.com/wpt-prime-taiwan-hon-cheong-ivan-lee-ships-super-high-roller-im-heesoo-wins-single-day-hr/",
    pokernewsUrl: "",
  },
];

const HeroPage = () => {
  return (
    <main className="flex flex-col relative justify-center items-center pt-24 bg-[url('/assets/background/background.webp')] bg-inherit md:bg-cover bg-left-top bg-fixed">
      <div className="container flex flex-col max-w-[1200px] justify-start gap-4 items-center p-4 lg:gap-8 lg:px-0">
        <div className="hero-container flex flex-col">
          <div className="banner flex flex-wrap">
            <Image
              alt=""
              src={"/assets/updated-assets/banner_left.webp"}
              width={604}
              height={581}
            />
            {/* <Link
              href="https://opensea.io/collection/acestakes-wsop-2023?fbclid=IwAR2NuOGfdamwhwd3HAvNIYEGPFNzq00E2fFcqGAj9F1Arjrubl2LWuJb3cc"
              target="_blank"
            > */}
            <Image
              alt=""
              src={"/assets/updated-assets/banner_right.webp"}
              width={444}
              height={581}
            />
            {/* </Link> */}
          </div>
        </div>

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
        <div className="team-container flex flex-col grow gap-2 lg:gap-4 lg:max-w-[1200px]">
          <div className="title flex">
            <span
              className={`${oswald.className} text-white grow text-center text-5xl font-semibold`}
            >
              TEAM LOC
            </span>
          </div>
          <div className="cards-container flex flex-col lg:grid grid-cols-2 grid-rows-3 place-items-center gap-x-4 gap-y-0 text-white">
            {TEAM_LOC_DATA.map((data, index) => {
              return (
                <div key={index} className={`${data.classname} w-full`}>
                  <div className="h-full w-full flex flex-col md:flex-row justify-center items-center md:justify-start p-5 gap-5 md:items-center md:max-w-[600px] md:min-h-[250px] bg-gradient-to-b md:bg-gradient-to-r from-[#6b27a0]/95 from-30% to-60% to-[#0d0c0e]/40 rounded-xl">
                    <Image
                      alt={data.name}
                      src={data.imgUrl}
                      width={180}
                      height={180}
                      className="border-2 rounded-full border-[#a539f8]"
                    />

                    <div className="flex flex-col items-start h-full gap-5 py-[2rem]">
                      <h1
                        className={`${oswald.className} text-white grow text-center text-2xl font-semibold`}
                      >
                        {data.name}
                      </h1>

                      <div className="flex flex-wrap justify-start items-center gap-2">
                        {data.henbobUrl !== "" && (
                          <Link href={data.henbobUrl} target="_blank">
                            <div
                              className={`${oswald.className} font-medium text-sm bg-[#a939ff] py-1 px-4 hover:opacity-50 active:scale-95 duration-300`}
                            >
                              Hendon Mob
                            </div>
                          </Link>
                        )}

                        {data.wsopUrl !== "" && (
                          <Link href={data.wsopUrl} target="_blank">
                            <div
                              className={`${oswald.className} font-medium text-sm bg-[#a939ff] py-1 px-4 hover:opacity-50 active:scale-95 duration-300`}
                            >
                              WSOP
                            </div>
                          </Link>
                        )}

                        {data.pokernewsUrl !== "" && (
                          <Link href={data.pokernewsUrl} target="_blank">
                            <div
                              className={`${oswald.className} font-medium text-sm bg-[#a939ff] py-1 px-4 hover:opacity-50 active:scale-95 duration-300`}
                            >
                              PokerNews
                            </div>
                          </Link>
                        )}

                        {data.youtubeUrl !== "" && (
                          <Link href={data.youtubeUrl} target="_blank">
                            <div
                              className={`${oswald.className} font-medium text-sm bg-[#a939ff] py-1 px-4 hover:opacity-50 active:scale-95 duration-300`}
                            >
                              YouTube
                            </div>
                          </Link>
                        )}

                        {data.somuchpokerUrl !== "" && (
                          <Link href={data.somuchpokerUrl} target="_blank">
                            <div
                              className={`${oswald.className} font-medium text-sm bg-[#a939ff] py-1 px-4 hover:opacity-50 active:scale-95 duration-300`}
                            >
                              Somuchpoker
                            </div>
                          </Link>
                        )}
                      </div>

                      <div className="flex flex-col gap-2">
                        <p
                          className={`${lato.className} text-white font-normal text-md`}
                        >
                          {data.title}
                        </p>
                        <p
                          className={`${lato.className} text-white font-normal text-md`}
                        >
                          {data.subTitle}
                        </p>
                        <p
                          className={`${lato.className} text-white font-normal text-md`}
                        >
                          {data.achievement}
                        </p>
                        <p
                          className={`${lato.className} text-white font-normal text-md`}
                        >
                          {data.livewinnings}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <PastCollection />
    </main>
  );
};

export default HeroPage;
