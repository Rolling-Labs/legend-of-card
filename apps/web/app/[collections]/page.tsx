"use client";
import CollectionsSection from "components/Collections";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import WSOPSection from "components/WSOP";

const CollectionPage = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/collections-1" && <CollectionsSection />}
      {pathname === "/collections-2" && <WSOPSection />}
    </>
  );
};

export default CollectionPage;
