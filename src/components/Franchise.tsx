import Section from "./ui/Section";

export default function Franchise() {
  return (
    <Section
      bgColor="bg-secondary"
      imageSrc="images/franchise-img.svg"
      imageAlt="Two individuals carrying shopping bags"
      title="Franchise"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloribus, voluptatem quibusdam similique repellendus dolor a veniam ad consectetur temporibus minima cumque, quae suscipit eveniet debitis quo incidunt asperiores dicta."
      buttonLink="/franchise"
      buttonText="Become a partner"
      buttonBgColor="primary"
      buttonTextColor="primary"
      imageFirst={true}
    />
  );
}
