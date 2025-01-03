export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex min-h-screen max-w-screen-md flex-col">
      {children}
    </div>
  );
}
