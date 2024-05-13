"use client";

import { ItemMenu } from "./ItemMenu";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between -mt-2 md:-mt-2">
      <div className="hidden md:block">
        <div className="flex justify-around border p-3 rounded-3xl shadow-gray-500 shadow-md">
          <ItemMenu label="Home" href="/" />
          <ItemMenu label="Vítimas" href="/victims" />
          <ItemMenu label="Ajuda" href="/help" />
          <ItemMenu label="Mapa" href="/map" />
          <ItemMenu label="FAQ" href="/faq" />
        </div>
      </div>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="rounded-full w-14 h-14 md:hidden block mr-2 bg-white hover:bg-gray-200"
      >
        <GiHamburgerMenu className="w-5 h-5 text-black" />
      </Button>

      {isOpen && (
        <div className="absolute top-20 left-0 z-10 rounded-md">
          <div className="w-screen h-72 flex flex-col bg-white  rounded-md text-black">
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className="text-xl font-semibold m-3 cursor-pointer hover:text-gray-500"
              href="/"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className="text-xl font-semibold m-3 cursor-pointer hover:text-gray-500"
              href="/victims"
            >
              Vítimas
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className="text-xl font-semibold m-3 cursor-pointer hover:text-gray-500"
              href="/help"
            >
              Ajuda
            </Link>

            <Link
              onClick={() => setIsOpen(!isOpen)}
              className="text-xl font-semibold m-3 cursor-pointer hover:text-gray-500"
              href="/map"
            >
              Mapa
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className="text-xl font-semibold m-3 cursor-pointer hover:text-gray-500"
              href="/faq"
            >
              FAQ
            </Link>
            <hr className="bg-gray-400 w-full" />
            <span className="font-bold m-3 cursor-pointer hover:text-purple- bg-white">
              Empatia e soliedariedade pelas vítimas do desastre ❤️
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
