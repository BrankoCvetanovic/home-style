import galeryImages from "../data/galeryImages";

export default function GaleryPage() {
  return (
    <div className="galery">
      <div className="info">
        <h1>Our Galery</h1>
        <p>
          Browse Installation Photos, Design Examples, and High-Quality
          Photorealistic Renderings by Our Talented Team
        </p>
      </div>
      <ul className="galery-container">
        {galeryImages.map((image, index) => (
          <li key={index}>
            <img loading="leazy" src={image} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}
