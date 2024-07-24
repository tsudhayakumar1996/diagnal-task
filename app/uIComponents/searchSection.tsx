import Image from "next/image";
import { useEffect, useState } from "react";
import { usePostContext } from "../context/posts/usePostContext";

const SearchSection = () => {
  // state
  const [openSearch, setopenSearch] = useState(false);
  const [searchKey, setsearchKey] = useState("");

  // context
  const { filterPostsHandler, data, clearFilterHandler } = usePostContext();

  // effect
  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchKey) filterPostsHandler(searchKey);
    }, 1000);
    return () => clearTimeout(delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKey]);

  // handler
  const onClear = () => {
    if (searchKey) clearFilterHandler();
    setsearchKey("");
    setopenSearch(false);
  };

  return (
    <>
      {!openSearch ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/search.png`}
          alt="search-icon"
          width={20}
          height={20}
          onClick={() => setopenSearch(!openSearch)}
        />
      ) : (
        <div className="relative">
          <input
            className="w-24 px-2 text-black rounded-md"
            value={searchKey}
            onChange={(e) => setsearchKey(e.target.value)}
          />
          <p className="absolute top-0 text-black right-2" onClick={onClear}>
            X
          </p>
        </div>
      )}
    </>
  );
};

export default SearchSection;
