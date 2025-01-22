import galeryImages from "../data/galeryImages";
import ImageModal from "../components/ImageModal";
import { useRef, useState } from "react";

export default function GaleryPage() {
  const modal = useRef();
  const [imageRef, setImageRef] = useState("");

  function handleOpenImage(image) {
    setImageRef(image);
    modal.current.open();
  }

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
          <li onClick={() => handleOpenImage(image)} key={index}>
            <img src={image} alt="" />
          </li>
        ))}
      </ul>
      <ImageModal ref={modal} image={imageRef} />
    </div>
  );
}
