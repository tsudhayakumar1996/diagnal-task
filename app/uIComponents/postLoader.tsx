import ColsThreeContainer from "@/app/container/colsThreeContainer";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const PostLoader = () => {
  // const
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="p-3">
      <ColsThreeContainer>
        {arr.map((e) => (
          <div key={e}>
            <Skeleton className="w-full h-40 rounded-md bg-slate-700" />
            <Skeleton className="w-full h-5 mt-3 rounded-md bg-slate-700" />
          </div>
        ))}
      </ColsThreeContainer>
    </div>
  );
};

export default PostLoader;
