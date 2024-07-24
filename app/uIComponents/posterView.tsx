"use client";

import { LazyLoadImage } from "react-lazy-load-image-component";
import InfiniteScroll from "react-infinite-scroll-component";
import { usePostContext } from "../context/posts/usePostContext";

const PosterView = () => {
  // context
  const { data, loading, total, fetchPosts } = usePostContext();
  console.log(total, data.length, loading);

  return (
    <div className="flex-1 overflow-y-auto" id="scrollableDiv">
      <InfiniteScroll
        dataLength={data.length}
        next={() => fetchPosts()}
        hasMore={total > data.length}
        loader={<></>}
        scrollableTarget="scrollableDiv"
      >
        <div className="grid grid-cols-3 gap-3 p-3">
          {data.map((content: any, idx: any) => (
            <div key={idx} className="w-full">
              <LazyLoadImage
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/${content["poster-image"]}`}
                alt={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/placeholder_for_missing_posters.png}`}
              />
              <p className="mt-1 mb-3">{content.name}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default PosterView;
