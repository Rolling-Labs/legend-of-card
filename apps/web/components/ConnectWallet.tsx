"use client";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });

export const ConnectWallet = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className={`${oswald.className} flex flex-row items-center rounded-xl  gap-2 capitalize self-stretch px-4 py-2 text-xl text-white hover:brightness-125`}
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className="flex flex-row items-center rounded-xl  gap-2 bg-[#fc0002] text-white capitalize  px-4 py-2 text-xl hover:brightness-125"
                    type="button"
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openAccountModal}
                    type="button"
                    className={`${oswald.className} flex flex-row items-center rounded-xl  gap-2 capitalize self-stretch px-4 py-2 text-xl text-white hover:brightness-125`}
                  >
                    {account.displayName}

                    <Image
                      src={"/assets/icons/dropdown-icon.svg"}
                      alt={"dropdown"}
                      height={20}
                      width={20}
                    />
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
