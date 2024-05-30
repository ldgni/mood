import { Facebook, Instagram } from "lucide-react";

type CardProps = {
  image: string;
  title: string;
  address: string;
  openingHours: string;
  email: string;
  socials: { name: "facebook" | "instagram"; url: string }[];
};

export default function Card({
  image,
  title,
  address,
  openingHours,
  email,
  socials,
}: CardProps) {
  return (
    <div className="max-w-lg overflow-hidden rounded-3xl bg-quinary shadow">
      <img src={image} alt={title} />
      <div className="flex flex-col items-center gap-2 p-4">
        <h2 className="font-special text-4xl font-semibold uppercase">
          {title}
        </h2>
        <p>{address}</p>
        <p>{openingHours}</p>
        <p>{email}</p>
        <div className="mt-2 flex gap-4">
          {socials.map((social, index) => (
            <a key={index} href={social.url} aria-label={social.name}>
              {social.name === "facebook" && <Facebook size={32} />}
              {social.name === "instagram" && <Instagram size={32} />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
