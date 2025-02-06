import { Email, Phone } from "@mui/icons-material";
import kuhinja from "../assets/Kuhinja-Atina-2-e1730295717987.png";
const apiKey = import.meta.env.VITE_API_KEY;

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="image-container">
        <img src={kuhinja} alt="Contact Illustration" />
      </div>
      <div className="contact-container">
        <h1>Kontakt</h1>
        <div className="contact-info">
          <p>
            <Email /> Email:{" "}
            <a href="mailto:example@email.com">example@email.com</a>
          </p>
          <p>
            <Phone /> Telefon: <a href="tel:+381601234567">+381 60 123 4567</a>
          </p>
        </div>
        <div className="map-container">
          <iframe
            title="Google Map"
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=43.328423,21.956343`}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
