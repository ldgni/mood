export default function Container({ children }) {
  return (
    <div className="container flex min-h-screen max-w-screen-md flex-col">
      {children}
    </div>
  );
}
