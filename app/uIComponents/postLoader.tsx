import ColsThreeContainer from "@/app/container/colsThreeContainer";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PostLoader = () => {
  // const
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="p-3">
      <ColsThreeContainer>
        {arr.map((e) => (
          <div key={e}>
            <LazyLoadImage
              src={"placeholder_for_missing_posters.png"}
              alt="loading-img"
            />
            <div className="h-4 rounded-md bg-stone-800 w-full mb-3 mt-2"></div>
          </div>
        ))}
      </ColsThreeContainer>
    </div>
  );
};

export default PostLoader;
