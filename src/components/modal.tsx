interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  title: string;
  message: string;
}

export default function Modal({
  showModal,
  setShowModal,
  title,
  message,
}: ModalProps) {
  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center bg-gray-500/75 p-4"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) setShowModal(false);
      }}>
      <div className="flex flex-col items-center gap-2 rounded-2xl bg-slate-600 p-4 text-center text-neutral-300 sm:p-6">
        <h3 className="font-heading text-2xl leading-none font-semibold sm:text-4xl">
          {title}
        </h3>
        <p>{message}</p>
        <button
          className="cursor-pointer rounded-full bg-neutral-300 px-4 py-2 font-medium text-indigo-950 duration-300 hover:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-100 active:bg-neutral-400"
          onClick={() => setShowModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
}
