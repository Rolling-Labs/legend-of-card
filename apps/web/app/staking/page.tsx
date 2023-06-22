import { Lato, Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const oswald = Oswald({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function Staking() {
  return (
    <section className="h-screen lg:h-screen flex relative justify-center items-center pt-24 px-4 overflow-none bg-[url('/assets/background/background.webp')] bg-cover bg-center">
      <div className="container rounded-t-2xl overflow-hidden max-w-[1048px]">
        <div className="title px-8 py-4 bg-[#A939FF]">
          <span
            className={`${oswald.className} text-white font-semibold text-2xl self-stretch lg:text-4xl`}
          >
            TEAM LOC
          </span>
        </div>
        <div className="content bg-gradient-to-r from-[#A939FF80] to-transparent flex flex-col lg:flex-row flex-nowrap gap-4 p-6 lg:p-10">
          <div className="left flex gap-4 grow">
            <div className="updown-btns h-fit min-w-[32px] grow-0 border-2 border-white bg-[#5C5C5C] rounded-xl overflow-hidden">
              <button className="outline-none border-none box-border px-3 py-2 justify-center items-center">
                <Image
                  alt="up-icon"
                  src={"/assets/icons/caret-up-solid.svg"}
                  width={13}
                  height={8}
                  className=""
                ></Image>
              </button>
              <button className="outline-none border-none box-border px-3 py-2 flex justify-center items-center">
                <Image
                  alt="up-icon"
                  src={"/assets/icons/caret-down-solid.svg"}
                  width={13}
                  height={8}
                ></Image>
              </button>
            </div>
            <div className="texts-container flex flex-col gap-4">
              <div className="title-container flex flex-col gap-2">
                <span
                  className={`${oswald.className} font-semibold text-xl lg:text-2xl text-white`}
                >
                  World Series of Poker Event
                </span>
                <div className="tags flex gap-2">
                  <span
                    className={`${oswald.className} font-medium text-lg lg:text-xl text-white bg-[#5C5C5C] px-2 py-1`}
                  >
                    No Markup
                  </span>
                  <span
                    className={`${oswald.className} font-medium text-lg lg:text-xl text-white bg-[#5C5C5C] px-2 py-1`}
                  >
                    20% Bonus
                  </span>
                </div>
              </div>
              <div className="subtitle-container grow flex flex-col justify-center items-start gap-4">
                <span
                  className={`${lato.className} whitespace-break-spaces text-base lg:text-lg leading-4 text-white`}
                >
                  Your payout is according to the % of action you have bought
                  from Team LoC.
                </span>
                <span
                  className={`${lato.className} whitespace-break-spaces text-base lg:text-lg leading-4 text-white`}
                >
                  Click{" "}
                  <Link href={"/how"} className="underline">
                    here
                  </Link>{" "}
                  to learn more.
                </span>
              </div>
            </div>
          </div>
          <div className="inputs-container flex flex-col grow">
            <div className="input-wrap">
              <div className="input flex gap-0">
                <input
                  type="number"
                  className={`px-4 placeholder:${lato.className} placeholder:text-xl`}
                  placeholder="ENTER AMOUNT"
                ></input>
                <button
                  className={`p-3 self-stretch bg-[#A939FF] text-white ${lato.className}`}
                >
                  BUY
                </button>
              </div>
              <div className="warning">
                <span className="p-2 text-gray-400">
                  PLEASE CONNECT WALLET!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
