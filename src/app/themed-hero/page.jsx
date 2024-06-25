import HeroThemes from "@/components/HeroThemes";
import React from "react";

const page = () => {
  return (
    <main className="mt-28">
      <HeroThemes />;
      <HeroThemes variant="lime" />;
      <HeroThemes variant="red" />;
    </main>
  );
};

export default page;
