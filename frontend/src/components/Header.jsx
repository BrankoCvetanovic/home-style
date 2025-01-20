import { NavLink } from "react-router";
import { IconButton } from "@mui/material";
import ContrastIcon from "@mui/icons-material/Contrast";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="nav-bar">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/galery"}>Galery</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <IconButton>
          <ContrastIcon />
        </IconButton>
      </div>
    </div>
  );
}
