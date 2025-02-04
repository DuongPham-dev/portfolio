import React from "react";

// Components
import ActionBarMobile from "./ActionBarMobile";
import { ActionBarDesktop } from "./ActionBarDesktop";

const Header = () => (
  <header>
    <ActionBarMobile />
    <ActionBarDesktop />
  </header>
);

export default Header;
