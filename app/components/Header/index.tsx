import { Menu } from "../Menu";

export const Header = () => {
  return (
    <header className="h-20 text-white md:p-12 p-5 flex w-full items-center justify-between bg-purple-600 border-2 shadow-gray-500 shadow-sm">
      <h1 className="text-2xl text-white font-extrabold">RS Help Center</h1>
      <Menu />
    </header>
  );
};
