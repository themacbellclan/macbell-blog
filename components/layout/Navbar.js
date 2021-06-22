import React from "react";
import Link from "next/link";
import Logo from "./Logo";

function Navbar() {
  return (
    <header className="flex flex-row justify-between">
      <ul className="flex flex-row tracking-wider text-xs my-5 ml-20 space-x-3">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/posts">BLOG</Link>
        </li>
        <li className="text-xs tracking-tighter">Our little life</li>
      </ul>

      <ul className="tracking-widest text-xl my-5">
        <li>
          <Link href="/posts">
            <a className="w-1/3">
              <Logo />
            </a>
          </Link>
        </li>
      </ul>

      <ul className="flex flex-row justify-end tracking-wider text-xs my-5 mr-20 space-x-3">
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
        <li>
          <Link href="/socialmedia">SOCIAL MEDIA</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
