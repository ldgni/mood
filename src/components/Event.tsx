import Section from "./ui/Section";

export default function Event() {
  return (
    <Section
      bgColor="bg-secondary"
      imageSrc="images/event-img.svg"
      imageAlt="Two individuals eating and drinking at a table"
      title="Event"
      text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam neque aperiam fugiat! Cupiditate, dolore odio sapiente asperiores laudantium alias ut ratione ipsam, iste assumenda dolorem iure quaerat eveniet facilis."
      buttonLink="/event"
      buttonText="Pump up"
      buttonBgColor="primary"
      buttonTextColor="primary"
      imageFirst={true}
    />
  );
}
