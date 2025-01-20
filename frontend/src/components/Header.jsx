import { NavLink } from "react-router";
import { IconButton } from "@mui/material";
import ContrastIcon from "@mui/icons-material/Contrast";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenMenu() {
    setIsOpen((prev) => !prev);
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className={isOpen ? "nav-bar active" : "nav-bar"}>
        <button onClick={handleCloseMenu} className="close">
          x
        </button>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/galery"}>Galery</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <IconButton>
          <ContrastIcon />
        </IconButton>
      </div>
      {!isOpen ? (
        <button onClick={handleOpenMenu} className="hamburger">
          ##
        </button>
      ) : null}
    </div>
  );
}
