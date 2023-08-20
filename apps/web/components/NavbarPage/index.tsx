"use client";
import React, { useEffect, useState } from "react";
import { Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

import { useRouter, usePathname } from "next/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const oswald = Oswald({ subsets: ["latin"] });

const NavbarPage = () => {
  const router = useRouter();
  const pathname = usePathname();
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
    <>
      <nav className="fixed top-0 flex justify-center items-center p-4 lg:py-4 bg-black w-full z-50">
        <div className="flex flex-row justify-between items-center max-w-[75rem] px-[1rem] grow">
          <Link href="https://legendofcards.io/">
            <Image
              alt="header_logo"
              src={"/assets/logo/header_logo.webp"}
              height={98}
              width={98}
              className="w-8 lg:w-12"
            />
          </Link>
          <div className="hidden gap-4 items-center justify-between lg:flex flex-row">
            {links.map((data, index) => (
              <Link
                key={index}
                href={data.linkUrl}
                className={`text-white capitalize px-4 py-2 text-xl ${
                  oswald.className
                } ${
                  pathname === data.linkUrl
                    ? "underline underline-offset-2"
                    : ""
                } `}
              >
                {data.name}
              </Link>
            ))}
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="solid"
                  className={`${oswald.className}  text-xl py-2 px-3 text-white uppercase`}
                >
                  <p
                    className={`${
                      pathname === "/collections-1" ||
                      pathname === "/collections-2"
                        ? "underline underline-offset-2"
                        : ""
                    }`}
                  >
                    Collections
                  </p>
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Example with disabled actions"
                disabledKeys={["edit", "delete"]}
                className={`${oswald.className}  bg-[#a939ff] py-2 px-3 text-white uppercase`}
              >
                <DropdownItem
                  key="collections-1"
                  onClick={() => router.push(`/${"collections-1"}`)}
                >
                  APT Incheon
                </DropdownItem>
                <DropdownItem
                  onClick={() => router.push(`/${"collections-2"}`)}
                  key="collections-2"
                >
                  WSOP 2023
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <div
          className={`fixed duration-300 right-3 p-5 flex flex-row justify-end lg:hidden z-[99999999]`}
        >
          <div className="lg:hidden " onClick={() => setOpenSide(!openSide)}>
            {!openSide ? (
              <MenuIcon className="text-white duration-300 w-6" />
            ) : (
              <XIcon className="text-white duration-300 w-6" />
            )}
          </div>
        </div>

        <div
          className={`fixed inset-0 duration-300 bg-transparent flex flex-col justify-center items-end h-screen 
            ${!openSide ? "translate-x-full" : " z-[9999999] "}`}
        >
          <div className="flex flex-col justify-center items-ends w-[70dvw] max-w-[350px] p-8 bg-black h-full">
            {links.map((data, index) => (
              <Link
                key={index}
                href={data.linkUrl}
                onClick={() => setOpenSide(!openSide)}
                className={`text-white capitalize py-2 text-2xl ${
                  oswald.className
                } ${
                  pathname === data.linkUrl
                    ? "underline underline-offset-4"
                    : ""
                } ${data.linkUrl === "/connect" ? "bg-white/10 mt-8" : ""}`}
              >
                {data.name}
              </Link>
            ))}
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="solid"
                  className={`${oswald.className} bg-[#a939ff] py-2 px-3 text-white uppercase w-full`}
                >
                  Collections
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                className={`${oswald.className} bg-[#a939ff] py-2 px-3 text-white uppercase w-full`}
              >
                <DropdownItem
                  key="collections-1"
                  className="w-full"
                  onClick={() => router.push(`/${"collections-1"}`)}
                >
                  Asian Poker
                </DropdownItem>
                <DropdownItem
                  onClick={() => router.push(`/${"collections-2"}`)}
                  key="collections-2"
                  className="w-full"
                >
                  WSOP 2023
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        {/* <div className="wrapper max-w-[800px] flex grow justify-between">
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
          <div className="hidden gap-4 w-full bg-white items-center justify-center lg:flex">
            {links.map((data, index) => (
              <Link
                key={index}
                href={data.linkUrl}
                className={`text-white capitalize px-4 py-2 text-xl ${
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
      </div> */}
      </nav>
    </>
  );
};

export default NavbarPage;
