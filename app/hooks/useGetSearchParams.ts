import { useSearchParams } from "next/navigation";

export const useGetSearchParams = () => {
  // hook
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  return { activePage: Number(page) };
};
