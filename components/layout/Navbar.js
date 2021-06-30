import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
// styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenuOpening = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className="flex flex-row justify-between mt-2 items-center w-full">
      <button className="focus:outline-none focus:border-transparent">
        <FontAwesomeIcon
          className="ml-6 md:hidden block text-md"
          icon={faBars}
          onClick={handleMenuOpening}
        />
      </button>
      <ul
        className={`${
          open ? "block" : "hidden"
        } absolute pt-0 top-24 left-0 flex-col w-full p-6 bg-white shadow-md rounded-lg z-20 md:relative md:top-0 md:z-0 md:flex md:flex-row md:space-x-3 md:rounded-none md:shadow-none md:bg-transparent md:p-6 md:justify-end text-xs tracking-widest md:mr-28 lg:mr-64 md:ml-1 lg:ml-1 xl:ml-0 xl:mr-72`}
      >
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/posts">BLOG</Link>
        </li>
        <li className="text-xs tracking-tighter whitespace-nowrap hidden md:block">
          Our little life
        </li>
      </ul>

      <ul className="tracking-widest text-xl mx-5 my-5 md:w-full ">
        <li className="flex flex-row justify-end md:justify-center">
          <Link href="/posts">
            <a className="w-1/2 md:w-full">
              <Logo />
            </a>
          </Link>
        </li>
      </ul>

      <ul
        className={`${
          open ? "block" : "hidden"
        } absolute top-32 left-0 z-20 flex-col w-full bg-white shadow-md rounded-lg p-6 md:relative md:top-0 md:flex md:flex-row md:space-x-3 md:rounded-none md:shadow-none md:bg-transparent md:ml-28 lg:ml-56 xl:ml-72 md:p-6 pt-0 text-xs tracking-widest md:justify-start`}
      >
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
        <li className="whitespace-nowrap">
          <Link href="/socialmedia">SOCIAL MEDIA</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
