import Link from "next/link";

interface ItemMenuProps {
  label: string;
  href: string;
  active?: boolean;
}

export const ItemMenu = ({ label, href, active }: ItemMenuProps) => {
  return (
    <Link
      href={href}
      className={`border p-1 m-2 w-24 items-center transition delay-100 justify-center flex rounded-3xl cursor-pointer border-white hover:bg-white text-white hover:text-black`}
    >
      <span className="w-full flex justify-center text-center">{label}</span>
    </Link>
  );
};
