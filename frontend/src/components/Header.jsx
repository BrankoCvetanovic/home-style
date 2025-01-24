import { NavLink } from "react-router";
import { IconButton } from "@mui/material";
import ContrastIcon from "@mui/icons-material/Contrast";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

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
      <div className="logo">Logo</div>
      <div className={isOpen ? "nav-bar active" : "nav-bar"}>
        <IconButton onClick={handleCloseMenu} className="close">
          <CloseIcon />
        </IconButton>
        <NavLink onClick={handleCloseMenu} to={"/"}>
          Home
        </NavLink>
        <NavLink onClick={handleCloseMenu} to={"/galery"}>
          Galery
        </NavLink>
        <NavLink onClick={handleCloseMenu} to={"/contact"}>
          Contact
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
