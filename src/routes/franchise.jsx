import { useRef, useState } from "react";

export default function Franchise() {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formRef.current) {
      formRef.current.reset();
    }
    setShowModal(true);
  };

  return (
    <div className="flex flex-col items-center gap-6 text-center sm:text-lg">
      <h1 className="font-heading text-5xl font-bold uppercase">Franchise</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae veniam,
        harum deserunt repellat nesciunt natus sequi placeat corrupti ipsum
        itaque. Adipisci ipsam quam inventore, ducimus obcaecati quidem optio
        commodi labore.
      </p>
      <h2 className="font-heading text-4xl font-semibold uppercase">Why us?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        doloremque, quidem qui architecto mollitia nemo sint ex magnam dolore
        iusto magni! Sint sequi maiores id quibusdam, quisquam soluta molestiae
        veniam.
      </p>
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

      {showModal && (
        <div
          className="fixed inset-0 z-20 flex items-center justify-center bg-gray-500 bg-opacity-75 p-4"
          role="dialog"
          aria-modal="true">
          <div className="flex flex-col items-center gap-2 rounded-2xl bg-slate-600 p-4 text-center text-neutral-300 sm:p-6">
            <h3 className="font-heading text-2xl font-semibold leading-none sm:text-4xl">
              Success!
            </h3>
            <p>Your form has been successfully submitted.</p>
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
