"use client";

import React from "react";
import Link from "next/link";

// Icon
import { CloseIcon, ListIcon } from "@/icons";

// Constants
import { ROUTES } from "@/constants";

// Hooks
import { useToggle } from "@/hooks";

const ActionBarMobile = () => {
  const {
    opened: actionBarIsOpened,
    close: closeActionBar,
    open: openActionBar,
  } = useToggle();

  return (
    <div className="md:hidden flex justify-end p-3">
      <button onClick={openActionBar}>
        <ListIcon />
      </button>
      {actionBarIsOpened && (
        <section className="fixed inset-0 bg-white">
          <div className="flex justify-end px-2 py-1 border-b-[1px]">
            <button onClick={closeActionBar}>
              <CloseIcon />
            </button>
          </div>
          <ul className="border-b-[1px] text-gray-500">
            {ROUTES.map(({ href, id, name }) => (
              <li key={id} className="p-3">
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
          <div className="p-3">
            <button className="w-full bg-black text-white py-1 border-none rounded-lg">
              Download CV
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default ActionBarMobile;
