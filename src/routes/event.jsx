import { useState } from "react";

export default function Event() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 text-center sm:text-lg">
      <h1 className="font-heading text-5xl font-bold uppercase">Event</h1>
      <p>
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

      {showModal && (
        <div
          className="fixed inset-0 z-20 flex items-center justify-center bg-gray-500 bg-opacity-75 p-4"
          role="dialog"
          aria-modal="true">
          <div className="flex flex-col items-center gap-2 rounded-2xl bg-slate-600 p-4 text-center text-neutral-300 sm:p-6">
            <h3 className="font-heading text-2xl font-semibold leading-none sm:text-4xl">
              Watch out!
            </h3>
            <p>Our ordering system is still under construction.</p>
            <button
              className="rounded-full bg-neutral-300 px-4 py-2 font-medium text-indigo-950 duration-300 hover:opacity-50"
              onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
