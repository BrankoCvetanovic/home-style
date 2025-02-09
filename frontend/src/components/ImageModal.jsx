import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from "react";
import { createPortal } from "react-dom";

const ImageModal = forwardRef(({ image }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const modal = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        setIsVisible(true);
        modal.current.showModal();
      },
    };
  });

  function handleClose() {
    setIsVisible(false);
    modal.current.close();
  }

  useEffect(() => {
    if (isVisible) {
      document.getElementById("dialog").addEventListener("click", (event) => {
        let rect = event.target.getBoundingClientRect();
        if (
          rect.left > event.clientX ||
          rect.right < event.clientX ||
          rect.top > event.clientY ||
          rect.bottom < event.clientY
        ) {
          handleClose();
        }
      });
    }
  }, [isVisible]);

  return createPortal(
    <dialog id="dialog" ref={modal} className="image-modal">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});
export default ImageModal;
