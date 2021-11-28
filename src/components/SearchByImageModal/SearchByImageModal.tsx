import React, { useState } from "react";
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
}: SearchByImageModalProps): JSX.Element => {
  const [imageTag, setImageTag] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setIsMatchFound(!!newValue);
    setImageTag(newValue);
  };
  const [matchFound, setIsMatchFound] = useState(false);

  const closeModal: any = (e: MouseEvent) => {
    e.preventDefault();
    if (onClose != null) {
      onClose(imageTag);
    }
  };

  return (
    <div className={styles["modal"]}>
      <dialog
        className={`${styles["search-by-image-modal"]} ${className}`}
        open={show ? true : false}
      >
        <h1>Recherche par image</h1>
        <input
          type="text"
          name="imageSearch"
          placeholder="Drop Image here"
          onChange={onChange}
        />
        <button name="close" onClick={closeModal}>
          Cancel
        </button>
        <button name="search" onClick={closeModal} disabled={!matchFound}>
          Search
        </button>
      </dialog>
    </div>
  );
};
