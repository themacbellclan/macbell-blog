import React from "react";
// nextjs components
import Link from "next/link";
// styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faTumblr,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

function Socials() {
  return (
    <div className="flex flex-row justify-center space-x-5 my-10">
      <Link href="https://google.com">
        <a>
          <FontAwesomeIcon
            className="text-gray-200 text-sm"
            icon={faFacebookF}
          />
        </a>
      </Link>
      <Link href="https://google.com">
        <a>
          <FontAwesomeIcon className="text-gray-200 text-sm" icon={faTwitter} />
        </a>
      </Link>
      <Link href="https://google.com">
        <a>
          <FontAwesomeIcon className="text-gray-200 text-sm" icon={faTumblr} />
        </a>
      </Link>
      <Link href="https://google.com">
        <a>
          <FontAwesomeIcon
            className="text-gray-200 text-sm"
            icon={faPinterest}
          />
        </a>
      </Link>
    </div>
  );
}

export default Socials;
