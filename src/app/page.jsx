import React, { Suspense } from "react";
import Loading from "@/components/loading";
import HomeScreen from "@/components/homeScreen";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeScreen />
    </Suspense>
  );
}
