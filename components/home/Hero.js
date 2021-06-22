import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <>
      <div>
        <Image
          src="/images/siteImages/beach-hero.jpg"
          alt="Placeholder"
          height={1000}
          width={1000}
        />
      </div>
      <div>
        <p>
          Our little corner of the internet includes stories and adventures from
          our little life. We thought it would be a fun way to write down our
          thoughts, be a little more intentional with our actions, and look back
          on our memories. We are a happy bunch and are happy you’re along for
          the ride. We live in Seattle, WA with our furry black lab Harley who
          says woof! We are both full time corporate American workers but when
          we have time off we use that for travel, learning, and fun hobbies. As
          you see the theme of our blog change over time, it reflects our
          learning and interests as they shift.
        </p>
      </div>
    </>
  );
}

export default Hero;
