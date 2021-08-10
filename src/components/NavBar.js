import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const clickables = links.map((link) => (
    <a key={link} href={"#" + link}>{link}</a>
  ));
  return <nav>{clickables}</nav>
}
export default NavBar;
