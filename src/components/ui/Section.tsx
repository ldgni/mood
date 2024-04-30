import { Link } from "react-router-dom";

interface SectionProps {
  bgColor: string;
  imageSrc: string;
  imageAlt: string;
  textColor?: string;
  title: string;
  text: string;
  buttonLink: string;
  buttonText: string;
  buttonBgColor: string;
  buttonTextColor: string;
  imageFirst?: boolean;
}

export default function Section({
  bgColor,
  imageSrc,
  imageAlt,
  textColor,
  title,
  text,
  buttonLink,
  buttonText,
  buttonBgColor,
  buttonTextColor,
  imageFirst,
}: SectionProps) {
  return (
    <section className={`${bgColor}`}>
      <div className="container flex flex-col gap-8 py-8 md:px-16 md:py-16 lg:grid lg:min-h-screen lg:grid-cols-2 lg:place-items-center lg:gap-16">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={imageFirst ? "lg:order-1" : ""}
        />
        <div
          className={`mx-auto flex max-w-prose flex-col gap-8 text-center ${textColor ? `${textColor}` : ""}`}>
          <h2 className="font-special text-5xl font-semibold uppercase md:text-7xl">
            {title}
          </h2>
          <p className="md:text-lg lg:text-xl">{text}</p>
          <Link
            to={buttonLink}
            className={`bg-${buttonBgColor} text-${buttonTextColor} mx-auto max-w-96 rounded-full px-6 py-4 font-special text-2xl font-semibold uppercase md:px-8 md:py-6 md:text-3xl`}>
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
