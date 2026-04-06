export const Footer = () => {
  return (
    <footer className="mt-12 bg-[#06080b]">
      <div className="mx-auto flex w-full max-w-265 flex-col items-center justify-between gap-3 px-5 py-6 text-center text-[14px] text-[#6f7378] md:flex-row md:px-6 md:text-left">
        <p>&copy; 2024 - {new Date().getFullYear()} Шодиёр Шокаримов</p>
        <p>
          Разработано с использованием Next.js, React, TypeScript, Node.js и Python
        </p>
      </div>
    </footer>
  );
};