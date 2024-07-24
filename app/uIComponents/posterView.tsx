"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import { usePostContext } from "../context/posts/usePostContext";
import PostCard from "./postCard";
import ColsThreeContainer from "@/app/container/colsThreeContainer";

const PosterView = () => {
  // context
  const { data, loading, total, fetchPosts } = usePostContext();

  return (
    <div className="flex-1 overflow-y-auto p-3" id="scrollableDiv">
      <InfiniteScroll
        dataLength={data.length}
        next={() => fetchPosts()}
        hasMore={total > data.length}
        loader={<></>}
        scrollableTarget="scrollableDiv"
      >
        <ColsThreeContainer>
          {data.map((content: any, idx: any) => (
            <div key={idx} className="w-full">
              <PostCard content={content} />
            </div>
          ))}
        </ColsThreeContainer>
      </InfiniteScroll>
    </div>
  );
};

export default PosterView;
