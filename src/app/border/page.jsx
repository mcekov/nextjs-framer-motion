import AnimateBorder from "@/components/AnimateBorder";
import React from "react";

const page = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-slate-950 text-white">
      <AnimateBorder />
    </div>
  );
};

export default page;
