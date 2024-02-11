"use client";
import { DotLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <DotLoader size={100} color="purple" />
    </div>
  );
}
