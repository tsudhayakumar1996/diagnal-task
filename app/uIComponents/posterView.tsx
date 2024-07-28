"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import { usePostContext } from "@/app/context/posts/usePostContext";
import ColsThreeContainer from "@/app/container/colsThreeContainer";
import { EmptyUI, ErrorUI, PostCard } from "@/app/uIComponents";

const PosterView = () => {
  // context
  const {
    data,
    isFilterApplied,
    loading,
    error: { isError },
    total,
    page,
    fetchPosts,
  } = usePostContext();

  console.log(data, "data is here...");

  if (isError) {
    return <ErrorUI />;
  }

  if (data.length === 0 && loading === "completed") {
    return <EmptyUI />;
  }

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar p-3" id="scrollableDiv">
      <InfiniteScroll
        dataLength={data.length}
        next={() => fetchPosts(page)}
        hasMore={total > data.length && !isFilterApplied}
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
