import { useCallback, useEffect, useState } from "react";
import { apiGet } from "../helper/api";

type PostsRes = {
  page: {
    "content-items": {
      content: ContentProps[];
      "page-num-requested": string;
      "page-size-requested": string;
      "page-size-returned": string;
      title: string;
      "total-content-items": string;
    };
  };
};

type ContentProps = {
  name: string;
  "poster-image": string;
};

export const useFetchPosts = (page: number) => {
  // state
  const [data, setdata] = useState<PostsRes>();
  const [loading, setloading] = useState(false);

  // handler
  const fetchPosts = useCallback(async () => {
    setloading(true);
    try {
      const res = await apiGet(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}data/page${page}.json`
      );
      setdata(await res.json());
    } catch (error) {
      console.log("An fetch error occured");
    } finally {
      setloading(false);
    }
  }, [page]);

  // effect
  useEffect(() => {
    fetchPosts();
  }, [page, fetchPosts]);

  return {
    loading,
    data: data ? data.page["content-items"].content : [],
    total: data ? Number(data.page["content-items"]["total-content-items"]) : 0,
  };
};
