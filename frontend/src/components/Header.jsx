import { NavLink } from "react-router";
import { IconButton } from "@mui/material";
import ContrastIcon from "@mui/icons-material/Contrast";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import logo from "../assets/logo.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [colorSettings, setColorSettings] = useState({
    backgroundColor: "#b69f5b9a",
    border: "none",
  });

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0) {
      setColorSettings({
        backgroundColor: "white",
        borderBottom: "solid 3px #b69f5b9a",
      });
    } else {
      setColorSettings({
        backgroundColor: "#b69f5b9a",
        border: "none",
      });
    }
  });

  function handleOpenMenu() {
    setIsOpen((prev) => !prev);
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <motion.div style={colorSettings} className="header">
      <img className="logo" src={logo} alt="" />
      <div className={isOpen ? "nav-bar active" : "nav-bar"}>
        <IconButton onClick={handleCloseMenu} className="close">
          <CloseIcon />
        </IconButton>
        <NavLink onClick={handleCloseMenu} to={"/"}>
          Početna
        </NavLink>
        <NavLink onClick={handleCloseMenu} to={"/galery"}>
          Galerija
        </NavLink>
        <NavLink onClick={handleCloseMenu} to={"/contact"}>
          Kontakt
        </NavLink>
        <IconButton>
          <ContrastIcon />
        </IconButton>
      </div>
      {!isOpen ? (
        <IconButton onClick={handleOpenMenu} className="hamburger">
          <MenuIcon />
        </IconButton>
      ) : null}
    </motion.div>
  );
}
