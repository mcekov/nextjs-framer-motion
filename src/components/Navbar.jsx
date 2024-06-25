"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import todoIcon from "../../public/assets/img/icon-todo.svg";
import calendarIcon from "../../public/assets/img/icon-calendar.svg";
import remainderIcon from "../../public/assets/img/icon-reminders.svg";
import planingIcon from "../../public/assets/img/icon-planning.svg";

import Logo from "../../public/assets/img/framer-motion-logo.svg";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const navItems = [
  {
    label: "Features",
    link: "#",
    children: [
      {
        label: "Reveal Links",
        link: "/reveal-links",
        iconImage: todoIcon,
      },
      {
        label: "Carousel",
        link: "/carousel",
        iconImage: calendarIcon,
      },
      {
        label: "Heroes",
        link: "/themed-hero",
        iconImage: remainderIcon,
      },
      {
        label: "Planner",
        link: "/planner",
        iconImage: planingIcon,
      },
    ],
  },
  {
    label: "Company",
    link: "/company",
    children: [
      {
        label: "History",
        link: "/history",
        iconImage: "",
      },
      {
        label: "Our team",
        link: "/team",
        iconImage: "",
      },
      {
        label: "Blog",
        link: "/blog",
        iconImage: "",
      },
    ],
  },
  {
    label: "About us",
    link: "/about-us",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  function openMobileNav() {
    setIsMobileNavOpen(true);
  }
  function closeMobileNav() {
    setIsMobileNavOpen(false);
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-sm sticky top-0 z-10">
      {/* Left Side */}
      <section className="flex items-center gap-10">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="logo" width={50} height={50} priority />
        </Link>
        {isMobileNavOpen && <MobileNav closeMobileNav={closeMobileNav} />}

        {/* Nav Links */}
        <div className="hidden items-center gap-4 transition-all md:flex">
          {navItems.map((item, i) => (
            <div key={i} className="group relative px-2 py-3 transition-all">
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
                <span>{item.label}</span>
                {item.children && (
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                )}
              </p>
              {/* Dropdown */}
              {item.children && (
                <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-4 pl-5 pr-8 shadow-md transition-all group-hover:flex">
                  {item.children.map((child, j) => (
                    <Link
                      key={j}
                      href={child.link ?? "#"}
                      className="flex cursor-pointer items-center gap-2 py-1 transition-colors hover:text-black/50"
                    >
                      {child.iconImage && (
                        <Image src={child.iconImage} alt="todo-icon" />
                      )}
                      <span className="whitespace-nowrap pl-3">
                        {child.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Right Side */}
      <section className="hidden items-center gap-8 md:flex">
        <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
          Login
        </button>

        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
          Register
        </button>
      </section>

      {/* Mobile Menu */}

      <FiMenu
        onClick={openMobileNav}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

export default Navbar;

function MobileNav({ closeMobileNav }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[65%] bg-white px-4 py-5">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeMobileNav}
            className="cursor-pointer text-4xl"
          />
        </section>
        {/* Nav links */}
        <div className="flex flex-col gap-2 text-base transition-all">
          {navItems.map((item, i) => (
            <SingleNavItem key={i} {...item} />
          ))}
        </div>

        <section className="mt-4 hidden flex-col items-center gap-8 sm:flex">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>

          <button className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(item) {
  const [isItemOpen, setIsItemOpen] = useState(false);

  const toggleItem = () => {
    setIsItemOpen((prev) => !prev);
  };

  return (
    <div className="relative px-2 py-3 transition-all" onClick={toggleItem}>
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 transition-all duration-75 hover:text-black">
        <span>{item.label}</span>
        {item.children && (
          <IoIosArrowDown
            className={`text-xs transition-all ${isItemOpen && "rotate-180"}`}
          />
        )}
      </p>

      {/* Dropdown */}
      {isItemOpen && item.children && (
        <div className="flex w-auto flex-col gap-1 py-4 pl-5 pr-8 transition-all">
          {item.children.map((child, j) => (
            <Link
              key={j}
              href={child.link ?? "#"}
              className="flex cursor-pointer items-center gap-2 py-1 transition-colors hover:text-black/50"
            >
              {child.iconImage && (
                <Image src={child.iconImage} alt="todo-icon" />
              )}
              <span className="whitespace-nowrap pl-3">{child.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
