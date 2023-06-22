"use client";
import React, { useEffect, useState } from "react";
import { Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConnectWallet } from "../ConnectWallet";

const oswald = Oswald({ subsets: ["latin"] });

const NavbarPage = () => {
  const router = usePathname();
  const links = [
    {
      name: "Home",
      linkUrl: "/",
    },
    {
      name: "How it works",
      linkUrl: "/how-it-works",
    },
  ];

  const [openSide, setOpenSide] = useState(false);

  useEffect(() => {
    {
      openSide
        ? (document.body.style.overflowY = "hidden")
        : (document.body.style.overflowY = "auto");
    }
  }, [openSide]);

  return (
    <nav className="flex justify-center items-center p-4 lg:py-4 bg-black fixed top-0 w-screen z-50">
      <div className="wrapper max-w-[800px] flex grow justify-between">
        <div className="title-wrapper p-2 flex justify-center items-center">
          <Link href="https://legendofcards.io/">
            <Image
              alt="header_logo"
              src={"/assets/logo/header_logo.webp"}
              height={98}
              width={98}
              className="h-8 w-auto lg:h-12"
            />
          </Link>
        </div>
        <div className="buttons-wrapper flex justify-center items-center">
          <div
            className="mobile-nav p-2 lg:hidden"
            onClick={() => setOpenSide(!openSide)}
          >
            <Image
              alt="bars"
              src={"/assets/icons/bars.svg"}
              height={98}
              width={98}
              className="h-6 w-auto"
            />
          </div>
          <div className="hidden gap-4 items-center justify-center lg:flex">
            {links.map((data, index) => (
              <Link
                key={index}
                href={data.linkUrl}
                className={`text-white capitalize self-stretch px-4 py-2 text-xl ${
                  oswald.className
                } ${
                  router === data.linkUrl ? "underline underline-offset-2" : ""
                } `}
              >
                {data.name}
              </Link>
            ))}
          </div>
        </div>
        <div
          className={
            openSide
              ? "fixed right-0 h-screen w-screen -z-[1] bg-black/50 backdrop-blur-sm flex justify-end"
              : "hidden"
          }
        >
          <div className="flex flex-col justify-center items-center self-stretch w-[70dvw] max-w-[350px] bg-black p-8">
            {links.map((data, index) => (
              <Link
                key={index}
                href={data.linkUrl}
                onClick={() => setOpenSide(!openSide)}
                className={`text-white capitalize self-stretch px-4 py-2 text-2xl ${
                  oswald.className
                } ${
                  router === data.linkUrl ? "underline underline-offset-4" : ""
                } ${data.linkUrl === "/connect" ? "bg-white/10 mt-8" : ""}`}
              >
                {data.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;
