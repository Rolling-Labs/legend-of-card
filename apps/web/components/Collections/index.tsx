import React from "react";
import { Oswald, Lato } from "next/font/google";
import OtherCollectionsSection from "components/OtherCollections";
import Image from "next/image";
import Link from "next/link";
import NFTSection from "components/NFTUtil";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const oswald = Oswald({ subsets: ["latin"] });

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

const CollectionsSection = () => {
  return (
    <section className="flex flex-col relative justify-center items-center pt-32 bg-[url('/assets/background/background.webp')] bg-inherit md:bg-cover bg-left-top bg-fixed">
      <div className="container flex flex-col max-w-[1050px] justify-center gap-4 py-4 lg:gap-[2rem] lg:py-24 bg-black/40 backdrop-blur-sm w-full">
        <div className="flex flex-col px-4 lg:px-24 gap-4 lg:gap-10">
          <h1
            className={`text-center ${oswald.className} text-white font-semibold`}
          >
            <span className="text-4xl">Asian Poker Tour Incheon</span>
            <br></br>
            <span className="text-2xl">Main Event + High Roller</span>
          </h1>
        </div>

        <div className="flex justify-center items-center py-4 lg:py-16 w-full">
          <div className="banner flex flex-wrap">
            <Image
              alt=""
              src={"/assets/updated-assets/banner_left.jpg"}
              width={604}
              height={581}
            />

            <Link
              aria-disabled
              className="cursor-not-allowed"
              // href={
              //   "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/31845804452960518152450778683093737880118144641872874987667296804098879258824?fbclid=IwAR2mvRITrQmfsd1d2TnSCZVLDbGGDY87njR-1oj-f7GQijlVLBfxngJbbWg"
              // }
              href="#comingsoon"
            >
              <Image
                alt=""
                src={"/assets/updated-assets/banner_right_buynow_02.jpg"}
                width={444}
                height={581}
              />
            </Link>
          </div>
        </div>

        <NFTSection />

        <div className="cards-container flex flex-col lg:grid grid-cols-2 grid-rows-3 place-items-center gap-x-4 gap-y-0 text-white ">
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
        <div className="flex flex-col px-4 lg:px-24">
          <p
            className={`${oswald.className} mt-8 text-2xl font-medium text-white`}
          >
            The APT Korea event presents an exclusive opportunity for Acestakes
            NFT holders to possess ownership of Team LoC tournament shares,
            encompassing both the Main Event (Event 24) and the High Roller
            (Event 64). For comprehensive information, please{" "}
            <span>
              <a
                href="https://www.theasianpokertour.com/series/apt-incheon-south-korea-2023?fbclid=IwAR3-wfzgj2pTYoCTai22DGAkRMlhUX51CbBqTto3O8TLhm_h3i2Leo9Ds1k"
                target="_blank"
                className="underline underline-offset-2"
              >
                click here.
              </a>
            </span>
          </p>

          <br></br>
          <br></br>

          <p className={`${lato.className} text-white text-lg`}>
            ◆ Main Event Participation Cost: $1,725 USD High Roller
            Participation Cost: $3,375 USD Combined Total: $5,100 USD.
            <br></br>
            <br></br>◆ It’s important to note that participants in both events
            can do multiple re-entry* before late registration** ends.
            <br></br>
            <br></br>◆ We have strategized for a total of 30 buy-ins for the
            entire team, ie. 6 buy-ins per player, which results in a cumulative
            stake in play amounting to $5,100 USD multiplied by 6, totaling
            $30,600 USD.
            <br></br>
            <br></br>◆ Given our team strength of 5 members, the overall Team
            LoC investment stands at $30,600 USD multiplied by 5, equaling
            $153,000 USD.
            <br></br>
            <br></br>◆ Each player will sell 5% of their tournament shares to
            the LoC community, which leads to a value of $7,650 USD (5% of
            $153,000 USD).
            <br></br>
            <br></br>◆ The overall NFT collection consists of 200 units. These
            NFTs are being offered at a price point of $40 USD each, signifying
            a 0.025% share in the potential winnings of Team LoC.
            <br></br>
            <br></br>◆ Any unused funding will be returned to NFT holders
            through an airdrop, along with the winnings.
            <br></br>
            <br></br>◆ Funding will be allocated in the best interests of Team
            LoC and its backers.
          </p>
        </div>
        <div className="flex flex-col px-4 lg:px-24">
          <p className={`${lato.className} text-white text-lg`}>
            *If a player loses all their chips or falls below a certain chip
            count, they can choose to rebuy by paying the buy-in fee again. This
            gives them a new stack of chips and a fresh chance to continue
            playing.
            <br></br>
            <br></br>
            **Re-entry into the tournament is available until the end of level
            10.
          </p>
        </div>
        <OtherCollectionsSection
          imgUrl={"/assets/banner_left.webp"}
          title={"2023 WSOP"}
          subTitle={"Past Collection"}
          subTitleColor={"text-[#A939FF]"}
          href={"/collections-2"}
        />
      </div>
    </section>
  );
};

export default CollectionsSection;
