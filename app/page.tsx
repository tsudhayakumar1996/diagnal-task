"use client";

import RootContainer from "@/app/container/rootContainer";
import NavBar from "@/app/uIComponents/navBar";
import { lazy, Suspense } from "react";
import PostLoader from "@/app/uIComponents/postLoader";
const PosterView = lazy(() =>
  delayForDemo(import("@/app/uIComponents/posterView"))
);

export default function Home() {
  return (
    <RootContainer>
      <NavBar />
      <Suspense fallback={<PostLoader />}>
        <PosterView />
      </Suspense>
    </RootContainer>
  );
}

async function delayForDemo(promise: Promise<any>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}
