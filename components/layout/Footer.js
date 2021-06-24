import React from "react";
import Link from "next/link";
import Socials from "./Socials";

function Footer() {
  return (
    <>
      <div className="text-center space-x-3 mb-8 text-xs tracking-widest mt-10">
        <Link href="/contact">CONTACT</Link>
        <Link href="/socialmedia">SOCIAL MEDIA</Link>
      </div>
      <div className="text-center mb-14 font-light text-gray-500">
        <p>The Macbell Clan</p>
      </div>
      <Socials />
    </>
  );
}

export default Footer;
