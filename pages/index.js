import Hero from "../components/home/Hero";
import Link from "next/link";
import Socials from "../components/layout/Socials";

const homePageContent = [
  {
    image: "seattle-hero.jpg",
    paragraph1:
      "Themes that we focus on often are health, happiness, and some damn good ice cream. We met and fell in love while being healthy and active, making gym goals, and balancing macros. With this combination of food and fitness we’ve become the healthiest versions of ourselves and would love the opportunity to share that here.",
    paragraph2:
      "A promise we’ve made ourselves is to constantly be authentic. We will be real as we write out our every day actions and feelings. We do this because we think the world needs a little more real.",
  },
  {
    image: "home-1.jpg",
    paragraph1:
      "Themes that we focus on often are health, happiness, and some damn good ice cream. We met and fell in love while being healthy and active, making gym goals, and balancing macros. With this combination of food and fitness we’ve become the healthiest versions of ourselves and would love the opportunity to share that here. ",
    paragraph2:
      "A promise we’ve made ourselves is to constantly be authentic. We will be real as we write out our every day actions and feelings. We do this because we think the world needs a little more real. ",
  },
  {
    image: "home-3.jpg",
    paragraph1:
      "Lastly, ice cream. Ice cream is a go to cheat meal for us, we regularly test out new recipes in our kitchen and try new flavours when we travel. We like giving reference to the best ice cream parlors and the hidden gems of each city. You’ll see a lot of ice cream as we continue to see new places and experiment with flavours.",
    paragraph2:
      "We’re a pretty silly bunch and hope that comes through as we write more about our time here on this earth and as we share a little more about our little life. Thank you for being here with us!",
  },
];

export default function Home() {
  return (
    <>
      {homePageContent.map((item) => (
        <Hero
          key={item.image}
          image={item.image}
          paragraph1={item.paragraph1}
          paragraph2={item.paragraph2}
        />
      ))}
    </>
  );
}
