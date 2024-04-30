import Section from "./ui/Section";

export default function About() {
  return (
    <Section
      bgColor="bg-quaternary"
      imageSrc="images/about-img.svg"
      imageAlt="Two individuals carrying shopping bags"
      title="About"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vitae impedit soluta tenetur saepe, voluptas magnam voluptate distinctio reprehenderit, atque, harum modi fugiat porro ad vel natus facilis veritatis minima."
      textColor="text-white"
      buttonLink="/about"
      buttonText="Learn more"
      buttonBgColor="primary"
      buttonTextColor="primary"
    />
  );
}
