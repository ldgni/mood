"use client";

import { useState } from "react";

import Modal from "@/components/modal";

export default function PreorderButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
    </>
  );
}
