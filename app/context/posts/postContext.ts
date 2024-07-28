"use client";

import React from "react";

export type LoadingIndicationProps = "initial" | "loading" | "completed";

export type PostsRes = {
  page: {
    "content-items": {
      content: ContentProps[];
    };
    "page-num-requested": string;
    "page-size-requested": string;
    "page-size-returned": string;
    title: string;
    "total-content-items": string;
  };
};

export type ContentProps = {
  name: string;
  "poster-image": string;
};

type ErrorProp = {
  isError: boolean;
  msg: string;
};

export interface postContextProps {
  page: number;
  data: ContentProps[];
  total: number;
  loading: LoadingIndicationProps;
  error: ErrorProp;
  isFilterApplied: boolean;
  filterKey: string;
  fetchPosts: (page: number) => Promise<void>;
  filterPostsHandler: (q: string) => void;
  clearFilterHandler: () => void;
}

export const PostContext = React.createContext({} as postContextProps);
