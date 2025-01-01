import { Facebook, Instagram } from "lucide-react";

import StoreBerlin from "@/assets/images/stores/store-berlin-img.webp";
import StoreBrussels from "@/assets/images/stores/store-brussels-img.webp";
import StoreLosAngeles from "@/assets/images/stores/store-la-img.webp";
import StoreLondon from "@/assets/images/stores/store-london-img.webp";
import StoreLuxembourg from "@/assets/images/stores/store-luxembourg-img.webp";
import StoreParis from "@/assets/images/stores/store-paris-img.webp";

const stores = [
  {
    id: 1,
    imageSrc: StoreBerlin,
    altText: "Berlin",
    title: "Berlin",
    address: "123 Berlin Street",
    hours: "Mon - Fri: 9am - 5pm",
    email: "berlin@mood.com",
    facebookLink: "#",
    instagramLink: "#",
  },
  {
    id: 2,
    imageSrc: StoreParis,
    altText: "Paris",
    title: "Paris",
    address: "123 Paris Street",
    hours: "Mon - Fri: 9am - 5pm",
    email: "paris@mood.com",
    facebookLink: "#",
    instagramLink: "#",
  },
  {
    id: 3,
    imageSrc: StoreLondon,
    altText: "London",
    title: "London",
    address: "123 London Street",
    hours: "Mon - Fri: 9am - 5pm",
    email: "london@mood.com",
    facebookLink: "#",
    instagramLink: "#",
  },
  {
    id: 4,
    imageSrc: StoreLuxembourg,
    altText: "Luxembourg",
    title: "Luxembourg",
    address: "123 Luxembourg Street",
    hours: "Mon - Fri: 9am - 5pm",
    email: "luxembourg@mood.com",
    facebookLink: "#",
    instagramLink: "#",
  },
  {
    id: 5,
    imageSrc: StoreLosAngeles,
    altText: "Los Angeles",
    title: "Los Angeles",
    address: "123 Los Angeles Street",
    hours: "Mon - Fri: 9am - 5pm",
    email: "la@mood.com",
    facebookLink: "#",
    instagramLink: "#",
  },
  {
    id: 6,
    imageSrc: StoreBrussels,
    altText: "Brussels",
    title: "Brussels",
    address: "123 Brussels Street",
    hours: "Mon - Fri: 9am - 5pm",
    email: "brussels@mood.com",
    facebookLink: "#",
    instagramLink: "#",
  },
];

export default function StoresList() {
  return (
    <ul className="flex flex-col gap-8 sm:grid sm:grid-cols-2">
      {stores.map((store) => (
        <li
          key={store.id}
          className="overflow-hidden rounded-xl border bg-orange-50 shadow">
          <img
            src={store.imageSrc}
            alt={store.altText}
            width={350}
            height={233}
          />
          <div className="flex flex-col gap-2 p-4">
            <h3 className="font-heading text-3xl font-semibold uppercase">
              {store.title}
            </h3>
            <p>{store.address}</p>
            <p>{store.hours}</p>
            <div className="inline-block">
              <a
                href={`mailto:${store.email}`}
                className="underline transition-opacity hover:opacity-50">
                {store.email}
              </a>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href={store.facebookLink}
                aria-label="Facebook"
                className="transition-transform hover:scale-125">
                <Facebook />
              </a>
              <a
                href={store.instagramLink}
                aria-label="Instagram"
                className="transition-transform hover:scale-125">
                <Instagram />
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
