import React from "react";
import { Oswald, Lato } from "next/font/google";
import OtherCollectionsSection from "components/OtherCollections";
import Image from "next/image";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const oswald = Oswald({ subsets: ["latin"] });

const CollectionsSection = () => {
  return (
    <section className="flex flex-col relative justify-center items-center pt-32 bg-[url('/assets/background/background.webp')] bg-inherit md:bg-cover bg-left-top bg-fixed">
      <div className="container flex flex-col max-w-[1200px] justify-center gap-4 py-4 lg:gap-[6rem] lg:py-24 bg-black/40 backdrop-blur-sm w-full">
        <div className="flex flex-col px-4 lg:px-24 gap-4 lg:gap-10">
          <h1
            className={`text-center ${oswald.className} text-white font-semibold`}
          >
            <span className="text-4xl">Asian Poker Tour Incheon</span>
            <br></br>
            <span className="text-2xl">Main Event + High Roller</span>
          </h1>
          <p
            className={`${oswald.className} mt-8 text-2xl font-medium text-white`}
          >
            The APT Korea event presents an exclusive opportunity for Acestakes
            NFT holders to possess ownership of Team LoC tournament shares,
            encompassing both the Main Event (Event 24) and the High Roller
            (Event 64). For comprehensive information, please{" "}
            <span>
              <a
                href="https://www.theasianpokertour.com/series/apt-incheon-south-korea-2023/events"
                className="underline underline-offset-2"
              >
                click here.
              </a>
            </span>
          </p>
        </div>
        <div className="flex justify-center items-center bg-[#a939ff] py-4 lg:py-16 w-full">
          <h1
            className={`${oswald.className} flex flex-wrap justify-center items-center text-4xl gap-4 font-semibold text-white uppercase`}
          >
            Coming soon on{" "}
            <Image
              alt=""
              src={"/assets/updated-assets/opensea.png"}
              width={40}
              height={40}
            />
            opensea
          </h1>
        </div>
        <div className="flex flex-col px-4 lg:px-24">
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
            LoC and its backers. *If a player loses all their chips or falls
            below a certain chip count, they can choose to rebuy by paying the
            buy-in fee again. This gives them a new stack of chips and a fresh
            chance to continue playing. **Re-entry into the tournament is
            available until the end of level 10.
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
        />
      </div>
    </section>
  );
};

export default CollectionsSection;
