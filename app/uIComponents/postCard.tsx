import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PostCard = ({
  content,
}: {
  content: { "poster-image": string; name: string };
}) => {
  // state
  const [imgLoadError, setimgLoadError] = useState(false);

  return (
    <>
      <LazyLoadImage
        src={
          !imgLoadError
            ? `${process.env.NEXT_PUBLIC_API_BASE_URL}images/${content["poster-image"]}`
            : `${process.env.NEXT_PUBLIC_API_BASE_URL}images/placeholder_for_missing_posters.png`
        }
        alt={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/placeholder_for_missing_posters.png}`}
        placeholderSrc={
          "https://test.create.diagnal.com/images/placeholder_for_missing_posters.png"
        }
        onError={(e) => setimgLoadError(true)}
      />
      <p className="mt-1 mb-3">{content.name}</p>
    </>
  );
};

export default PostCard;
