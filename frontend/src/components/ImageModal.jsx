import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from "react";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { createPortal } from "react-dom";

const ImageModal = forwardRef(
  ({ image, index, leftButton, rightButton }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    const modal = useRef(null);

    console.log(index);

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
        <IconButton onClick={() => leftButton(index)} className="left">
          <ArrowBackIosIcon />
        </IconButton>
        <div className="image-container">
          <img src={image} alt="" />
        </div>

        <IconButton onClick={() => rightButton(index)} className="right">
          <ArrowForwardIosIcon />
        </IconButton>
      </dialog>,
      document.getElementById("modal")
    );
  }
);
export default ImageModal;
