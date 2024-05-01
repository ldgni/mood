import { Facebook, Instagram } from "lucide-react";

export default function Copyright() {
  return (
    <div className="container flex flex-col items-center gap-4 py-8">
      <div className="flex gap-4">
        <a href="#">
          <Facebook size={32} />
        </a>
        <a href="#">
          <Instagram size={32} />
        </a>
      </div>
      <p className="text-2xl font-bold uppercase">Mood</p>
      <p>&copy; 2023 Mood GmbH</p>
    </div>
  );
}
