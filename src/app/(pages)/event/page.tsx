"use client";

import { useState } from "react";

import Modal from "@/components/modal";

export default function EventPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 text-center sm:text-lg md:text-xl">
      <h1 className="font-heading text-5xl font-bold uppercase sm:text-6xl md:text-7xl">
        Event
      </h1>
      <p className="max-w-2xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
        perspiciatis, corporis repellendus sapiente minus dolores accusamus
        rerum fugit mollitia totam? Recusandae ipsam ducimus ea quasi assumenda!
        Tenetur repudiandae fuga reiciendis!
      </p>
      <button
        className="rounded-full bg-slate-600 px-6 py-4 font-heading text-2xl font-semibold uppercase text-neutral-300 shadow duration-300 hover:scale-105 hover:opacity-75 sm:px-8 sm:py-6 sm:text-4xl"
        onClick={() => setShowModal(true)}>
        Preorder now
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Watch out!"
        message="Our ordering system is still under construction."
      />
    </div>
  );
}
