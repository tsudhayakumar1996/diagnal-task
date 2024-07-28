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
  const [cachedData, setcachedData] = useState<ContentProps[]>([]);
  const [total, settotal] = useState(0);
  const [loading, setloading] = useState<LoadingIndicationProps>("initial");
  const [error, seterror] = useState({
    isError: false,
    msg: "",
  });
  const [isFilterApplied, setisFilterApplied] = useState(false);
  const [filterKey, setfilterKey] = useState("");

  // fetch cb
  const fetchPosts = useCallback(
    async (activePage: number) => {
      setloading("loading");
      try {
        // api call
        const res = await apiGet(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}data/page${activePage}.json`
        );
        const toJson: PostsRes = await res.json();
        // set context with existing data
        if (activePage === 1) {
          // fresh data
          setdata(toJson.page["content-items"].content);
          setcachedData(toJson.page["content-items"].content);
        } else {
          // prev data exists
          setdata([...data, ...toJson.page["content-items"].content]);
          setcachedData([...data, ...toJson.page["content-items"].content]);
        }
        settotal(Number(toJson.page["total-content-items"]));
        setpage(activePage + 1);
      } catch (error: any) {
        seterror({
          isError: true,
          msg: error.message,
        });
      } finally {
        setloading("completed");
      }
    },
    [data]
  );

  // filter cb
  const filterPostsHandler = useCallback(
    async (q: string) => {
      const lowerCaseSearchTerm = q.toLowerCase();
      const filteredPosts = cachedData.filter((post) =>
        post.name.toLowerCase().includes(lowerCaseSearchTerm)
      );
      console.log(q, lowerCaseSearchTerm, filteredPosts, "filtered posts...");
      setdata(filteredPosts);
      setisFilterApplied(true);
      setfilterKey(q);
    },
    [cachedData]
  );

  const clearFilterHandler = useCallback(() => {
    setisFilterApplied(false);
    setpage(1);
    fetchPosts(1);
    setfilterKey("");
  }, [setpage, setisFilterApplied, fetchPosts]);

  // effect
  useEffect(() => {
    // initial fetch
    fetchPosts(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PostContext.Provider
      value={{
        page,
        data,
        total,
        loading,
        error,
        isFilterApplied,
        filterKey,
        fetchPosts,
        filterPostsHandler,
        clearFilterHandler,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
