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

  function changeToPrevImg(id) {
    if (id === 1) {
      setImageRef(galeryImages[galeryImages.length - 1]);
    } else {
      setImageRef(galeryImages[id - 2]);
    }
  }
  function changeToNextImg(id) {
    if (id === galeryImages.length) {
      setImageRef(galeryImages[0]);
    } else {
      setImageRef(galeryImages[id]);
    }
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
          <li onClick={() => handleOpenImage(image)} key={image.id}>
            <img src={image.img} alt="" />
          </li>
        ))}
      </ul>
      <ImageModal
        ref={modal}
        image={imageRef.img}
        index={imageRef.id}
        leftButton={changeToPrevImg}
        rightButton={changeToNextImg}
      />
      <div className="info">
        Naša celokupna galerija nalazi se na našem instagram profilu:{" "}
        <a href="https://www.instagram.com/retrostylenamestaj/">
          retrostylenamestaj
        </a>
      </div>
    </div>
  );
}
