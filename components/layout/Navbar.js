import React from "react";
import Link from "next/link";
import Logo from "./Logo";

function Navbar() {
  return (
    <header className="flex flex-row justify-between mt-1 items-center">
      <ul className="flex flex-row tracking-wider text-xs my-5 ml-16 space-x-4">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/posts">BLOG</Link>
        </li>
        <li className="text-xs tracking-tighter whitespace-nowrap">
          Our little life
        </li>
      </ul>

      <ul className="tracking-widest text-xl mx-5 my-5">
        <li>
          <Link href="/posts">
            <a className="w-1/3">
              <Logo />
            </a>
          </Link>
        </li>
      </ul>

      <ul className="flex flex-row justify-end tracking-wider text-xs my-5 mr-16 space-x-4">
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
