import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./SearchByImageModal.module.css";

interface SearchByImageModalProps {
  onClose?: Function;
  show: Boolean;
  className?: string;
}

export const SearchByImageModal = ({
  onClose,
  show,
  className,
}: SearchByImageModalProps): JSX.Element | null => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [matchFound, setIsMatchFound] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick: any = (e: MouseEvent) => {
    e.preventDefault();
    if (onClose != null) {
      onClose();
    }
  };

  const handleSearchClick: any = (e: MouseEvent) => {
    e.preventDefault();
    if (onClose != null) {
      onClose();
    }
  };

  const modalContent = (
    <dialog className={`${styles["search-by-image-modal"]} ${className}`}>
      <h1>Recherche par image</h1>
      Dropzone here
      <button name="close" onClick={handleCloseClick}>
        Cancel
      </button>
      <button name="search" onClick={handleSearchClick} disabled={!matchFound}>
        Search
      </button>
    </dialog>
  );

  if (isBrowser && show) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root") as HTMLElement
    );
  } else {
    return null;
  }
};
