"use client"
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="flex items-center justify-between max-w-[90%] mx-auto py-4 mt-4 font-outfit">
        <h1 className="text-[#202020] text-2xl font-bold">Logo Here</h1>
        <div className="max-md:hidden text-[#202020] text-base md:space-x-4 lg:space-x-14 font-medium">
          <Link href={"#"} className="hover:text-[#E03737]">
            Home
          </Link>
          <Link href={"#"} className="hover:text-[#E03737]">
            About us
          </Link>
          <Link href={"#"} className="hover:text-[#E03737]">
            Services
          </Link>
          <Link href={"#"} className="hover:text-[#E03737]">
            Tour Listing
          </Link>
          <Link href={"#"} className="hover:text-[#E03737]">
            Supplier Registration
          </Link>
        </div>
        <div className="max-md:flex max-md:items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 md:hidden"
            onClick={handleClick}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div className="bg-[#FFCACA] text-[#202020] rounded text-base px-5 py-2">
            Sign Up{" "}
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-white absolute z-10 text-[#202020] text-base space-y-2 font-medium flex flex-col w-full items-center rounded-b-2xl border border-t-0 border-[#E4E4E4] overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link href={"#"} className="hover:text-[#E03737] pt-4">
          Home
        </Link>
        <Link href={"#"} className="hover:text-[#E03737]">
          About us
        </Link>
        <Link href={"#"} className="hover:text-[#E03737]">
          Services
        </Link>
        <Link href={"#"} className="hover:text-[#E03737]">
          Tour Listing
        </Link>
        <Link href={"#"} className="hover:text-[#E03737] pb-4">
          Supplier Registration
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
