"use client";

import {
  ContentProps,
  LoadingIndicationProps,
  PostContext,
  PostsRes,
} from "@/app/context/posts/postContext";
import { apiGet } from "@/app/helper/api";
import { ReactNode, useCallback, useEffect, useState } from "react";

const PostContextProvider = ({ children }: { children: ReactNode }) => {
  // state
  const [page, setpage] = useState(1);
  const [data, setdata] = useState<ContentProps[]>([]);
  const [total, settotal] = useState(0);
  const [loading, setloading] = useState<LoadingIndicationProps>("initial");

  // cb
  const fetchPosts = useCallback(async () => {
    setloading("loading");
    try {
      // api call
      const res = await apiGet(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}data/page${page}.json`
      );
      const toJson: PostsRes = await res.json();
      // set context with existing data
      setdata([...data, ...toJson.page["content-items"].content]);
      setpage(page + 1);
      settotal(Number(toJson.page["total-content-items"]));
    } catch (error) {
      console.log("An fetch error occured");
    } finally {
      setloading("completed");
    }
  }, [page, data]);

  // effect
  useEffect(() => {
    // initial fetch
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PostContext.Provider
      value={{
        page,
        data,
        total,
        loading,
        fetchPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
