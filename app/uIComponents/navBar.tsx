"use client";

import Image from "next/image";
import SearchSection from "@/app/uIComponents/searchSection";

const NavBar = () => {
  return (
    <div className="pt-4 pb-1 px-2 flex justify-between items-center z-10">
      {/* nav bg */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/nav_bar.png`}
        style={{ height: "90px", width: "100%" }}
        alt="nav-bg"
        className="absolute top-0 left-0 -z-10"
      />
      {/* back button */}
      <div className="flex flex-row items-center">
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/Back.png`}
            alt="back-icon"
            width={15}
            height={15}
          />
        </div>
        <h1 className="text-2xl ml-4">Romantic Comedy</h1>
      </div>
      {/* search section */}
      <SearchSection />
    </div>
  );
};

export default NavBar;
