import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

import berlin from "../../public/images/stores/berlin.webp";
import brussels from "../../public/images/stores/brussels.webp";
import london from "../../public/images/stores/london.webp";
import losAngeles from "../../public/images/stores/los-angeles.webp";
import luxembourg from "../../public/images/stores/luxembourg.webp";
import paris from "../../public/images/stores/paris.webp";

const stores = [
  {
    id: 1,
    imageSrc: berlin,
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
    imageSrc: paris,
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
    imageSrc: london,
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
    imageSrc: luxembourg,
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
    imageSrc: losAngeles,
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
    imageSrc: brussels,
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
          className="overflow-hidden rounded-3xl border bg-orange-50 shadow">
          <Image src={store.imageSrc} alt={store.altText} />
          <div className="flex flex-col gap-2 p-4">
            <h3 className="font-heading text-3xl font-semibold uppercase">
              {store.title}
            </h3>
            <p>{store.address}</p>
            <p>{store.hours}</p>
            <div className="inline-block">
              <a
                href={`mailto:${store.email}`}
                className="underline transition-opacity hover:opacity-50 focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-indigo-500">
                {store.email}
              </a>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href={store.facebookLink}
                aria-label="Facebook"
                className="p-1 transition-transform hover:scale-125 focus:outline-none focus-visible:rounded-full focus-visible:ring-2 focus-visible:ring-indigo-500 active:scale-90">
                <Facebook />
              </a>
              <a
                href={store.instagramLink}
                aria-label="Instagram"
                className="p-1 transition-transform hover:scale-125 focus:outline-none focus-visible:rounded-full focus-visible:ring-2 focus-visible:ring-indigo-500 active:scale-90">
                <Instagram />
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
