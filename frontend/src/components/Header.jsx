import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="nav-bar">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/galery"}>Galery</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
    </div>
  );
}
