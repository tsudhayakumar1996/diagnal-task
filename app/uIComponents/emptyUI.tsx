import { LazyLoadImage } from "react-lazy-load-image-component";
import { usePostContext } from "@/app/context/posts/usePostContext";

const EmptyUI = () => {
  // context
  const { clearFilterHandler } = usePostContext();

  return (
    <div className="h-full p-3 flex flex-col items-center justify-center">
      <LazyLoadImage src="empty-box.png" alt="empty-image" className="w-48" />
      <button
        className="p-2 bg-white text-black rounded-xl w-28 mt-3"
        onClick={clearFilterHandler}
      >
        Go back
      </button>
    </div>
  );
};

export default EmptyUI;
