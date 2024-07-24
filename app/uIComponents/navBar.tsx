"use client";

import Image from "next/image";

const NavBar = () => {
  return (
    <div className="pt-4 pb-1 px-2 flex justify-between items-center z-10">
      {/* nav bg */}
      <img
        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/nav_bar.png`}
        style={{ height: "100px", width: "100%" }}
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
      {/* search button */}
      <div>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/search.png`}
          alt="search-icon"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default NavBar;
