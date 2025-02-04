import Link from "next/link";
import React from "react";

// Constants
import { ROUTES } from "@/constants";

export const ActionBarDesktop = () => (
  <div className="hidden md:flex justify-end items-center py-3 gap-5">
    <ul className="flex gap-5 text-gray-500">
      {ROUTES.map(({ id, href, name }) => (
        <li key={id}>
          <Link href={href}>{name}</Link>
        </li>
      ))}
    </ul>
    <button className="bg-black text-white py-1 px-4 border-none rounded-lg">
      Download CV
    </button>
  </div>
);
