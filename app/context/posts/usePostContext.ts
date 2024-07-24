import { useContext } from "react";
import { PostContext } from "./postContext";

export const usePostContext = () => useContext(PostContext);
