export default function Header({ children }) {
  return (
    <header className="flex flex-col items-end justify-center gap-4 w-[100%]">
      {children}
    </header>
  );
}
