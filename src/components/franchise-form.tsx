"use client";

import { useRef, useState } from "react";

import Modal from "@/components/modal";

export default function FranchiseForm() {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formRef.current) {
      formRef.current.reset();
    }
    setShowModal(true);
  };

  return (
    <>
      <form
        className="flex w-full flex-col gap-4"
        ref={formRef}
        onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          className="rounded-3xl border px-4 py-2"
          autoComplete="off"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email address"
          className="rounded-3xl border px-4 py-2"
          autoComplete="off"
          required
        />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Your city"
          className="rounded-3xl border px-4 py-2"
          required
        />
        <textarea
          name="intro"
          id="intro"
          placeholder="Please introduce yourself briefly"
          rows={5}
          className="rounded-3xl border px-4 py-2"
          required></textarea>
        <button
          type="submit"
          className="rounded-3xl bg-indigo-950 p-2 font-heading font-bold uppercase text-neutral-100 duration-300 hover:opacity-75">
          Let&apos;s go!
        </button>
      </form>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Success!"
        message="Your form has been successfully submitted."
      />
    </>
  );
}
