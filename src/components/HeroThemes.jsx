import React from "react";
import Image from "next/image";

import clsx from "clsx";

const HeroThemes = ({ variant = "" }) => {
  return (
    <div
      className={clsx(
        "relative bg-skin-fill max-w-4xl mx-auto overflow-hidden sm:rounded-2xl",
        {
          [variant]: variant,
        }
      )}
    >
      <Image
        className="absolute inset-0 object-cover opacity-30 "
        src="/assets/img/hero-bg.avif"
        alt="Picture of the author"
        fill
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90" />

      <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
          <span className="block">Focus on your content.</span>
          <span className="block">We handle the distribution.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-skin-muted">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          explicabo error corrupti dolor ex molestiae. Odit tenetur.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <a
              href="#"
              className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium sm:px-8"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium sm:px-8 bg-opacity-60 hover:bg-opacity-90"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroThemes;
