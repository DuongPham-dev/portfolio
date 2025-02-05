import React from "react";

// Components
import ActionBarMobile from "./ActionBarMobile";
import { ActionBarDesktop } from "./ActionBarDesktop";

const Header = () => (
  <header className="px-10">
    <ActionBarMobile />
    <ActionBarDesktop />
  </header>
);

export default Header;
