import React from "react";

const page = () => {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="grid p-4 max-w-5xl gap-4 xs:grid-cols-2 md:grid-cols-4">
        <h1 className="text-4xl font-extrabold xs:col-span-2 xs:grid xs:grid-cols-2 xs:gap-4 md:col-span-3 md:text-5xl md:grid-cols-3">
          <span className="md:col-span-3">Grid layout with Tailwindcss</span>
        </h1>
        <p className="xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet libero,
          alias eum saepe dolor quidem molestiae modi nemo.
        </p>
        <div className="h-16 xs:h-auto xs:square bg-blue-500"></div>
        <div className="h-16 xs:h-auto xs:square bg-blue-500"></div>
        <div className="h-16 xs:h-auto xs:square bg-pink-500"></div>
        <div className="h-16 xs:h-auto xs:square bg-blue-500"></div>
        <div className="h-16 xs:h-auto xs:square bg-pink-500"></div>
        <div className="h-16 xs:h-auto xs:square bg-blue-500"></div>
        <div className="h-16 xs:h-auto xs:square bg-blue-500"></div>
        <div className="h-16 xs:h-auto xs:square bg-pink-500"></div>

        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default page;
