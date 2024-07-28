import { LazyLoadImage } from "react-lazy-load-image-component";
import { usePostContext } from "@/app/context/posts/usePostContext";

const ErrorUI = () => {
  // context
  const {
    error: { msg },
  } = usePostContext();

  return (
    <div className="h-full p-3 flex flex-col items-center justify-center">
      <LazyLoadImage src="warning.png" alt="error-image" className="w-48" />
      <p>{msg || "An error occured!"}</p>
    </div>
  );
};

export default ErrorUI;
