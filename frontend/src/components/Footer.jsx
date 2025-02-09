import logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="first">
        <img className="logo" src={logo} alt="" />
        <div>RetroStyle</div>
      </div>
      <div>Kontakt:</div>
      <div>060123-3213</div>
    </div>
  );
}
