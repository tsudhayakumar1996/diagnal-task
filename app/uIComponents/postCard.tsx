"use client";

import { LazyLoadImage } from "react-lazy-load-image-component";

const PostCard = ({
  content,
}: {
  content: { "poster-image": string; name: string };
}) => {
  // const
  const src = `${process.env.NEXT_PUBLIC_API_BASE_URL}images/${content["poster-image"]}`;
  const placeholderSrc = `${process.env.NEXT_PUBLIC_API_BASE_URL}images/placeholder_for_missing_posters.png`;
  const alt = placeholderSrc;

  const imgPropSet = {
    src,
    placeholderSrc,
    alt,
  };

  return (
    <>
      <LazyLoadImage
        {...imgPropSet}
        onError={(e) => {
          e.currentTarget.src = placeholderSrc;
        }}
        className="min-h-40 md:max-w-40"
      />
      <p className="mt-1 mb-3">{content.name}</p>
    </>
  );
};

export default PostCard;
