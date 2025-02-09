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
        <h1>Naša Galerija</h1>
        <p>
          Pregledajte fotografije gotovih kuhinja, dizajnerske ideje i primere
          naše izrade.
        </p>
        <div>
          Naša celokupna galerija nalazi se na našem instagram profilu:{" "}
          <a href="https://www.instagram.com/retrostylenamestaj/">
            retrostylenamestaj
          </a>
        </div>
      </div>
      <ul className="galery-container">
        {galeryImages.map((image, index) => (
          <li onClick={() => handleOpenImage(image)} key={index}>
            <img src={image} alt="" />
          </li>
        ))}
      </ul>
      <ImageModal ref={modal} image={imageRef} />
      <div className="info">
        Naša celokupna galerija nalazi se na našem instagram profilu:{" "}
        <a href="https://www.instagram.com/retrostylenamestaj/">
          retrostylenamestaj
        </a>
      </div>
    </div>
  );
}
