import { Facebook, Instagram } from "lucide-react";

const stores = [
  {
    id: 1,
    imageSrc: "images/stores/store-berlin-img.webp",
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
    imageSrc: "images/stores/store-paris-img.webp",
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
    imageSrc: "images/stores/store-london-img.webp",
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
    imageSrc: "images/stores/store-luxembourg-img.webp",
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
    imageSrc: "images/stores/store-la-img.webp",
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
    imageSrc: "images/stores/store-brussels-img.webp",
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
