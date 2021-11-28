import React, { useState } from "react";
import styles from "./SearchByImageModal.module.scss";

interface SearchByImageModalProps {
  onClose?: Function;
  show: Boolean;
  className?: string;
}

const visionApiKey = "AIzaSyC9zEGPdec6sEvzbkhfaNnapz_GOognipg";
const visionUrl = `https://vision.googleapis.com/v1/images:annotate?key=${visionApiKey}`;

async function fetchImageTags(base64Image: string) {
  const response = await fetch(visionUrl, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
      requests: [
        {
          image: {
            content: base64Image,
          },
          features: [
            {
              maxResults: 10,
              type: "LABEL_DETECTION",
            },
          ],
        },
      ],
    }), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const base64ImageData =
  "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";

export const SearchByImageModal = ({
  onClose,
  show,
  className,
}: SearchByImageModalProps): JSX.Element => {
  const [foundLabels, setFoundLabels] = useState([]);

  const closeModal: any = (e: MouseEvent) => {
    e.preventDefault();
    if (onClose != null) {
      onClose();
    }
    setFoundLabels([]);
  };

  const searchWithTag: any = (searchValue: string) => {
    if (onClose != null) {
      onClose(searchValue);
    }
    setFoundLabels([]);
  };

  const searchImage: any = (e: MouseEvent) => {
    e.preventDefault();

    fetchImageTags(base64ImageData).then((data) => {
      if (
        data &&
        data.responses &&
        data.responses[0] &&
        data.responses[0].labelAnnotations &&
        data.responses[0].labelAnnotations.length > 1
      ) {
        setFoundLabels(
          data.responses[0].labelAnnotations.map((data: any) => {
            return data.description;
          })
        );
      } else {
        setFoundLabels([]);
      }
    });
  };

  return (
    <div className={styles["modal"]}>
      <dialog
        className={`${styles["search-by-image-modal"]} ${className}`}
        open={show ? true : false}
      >
        <h1>Recherche par image</h1>
        <button name="searchImage" onClick={searchImage}>
          Search with Vision
        </button>
        <ul>
          {foundLabels.map((label, index) => (
            <li key={index}>
              <div className={styles.row}>
                <div className={styles.tag}>{label}</div>
                <div>
                  <button onClick={() => searchWithTag(label)}>Filter</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button name="close" onClick={closeModal}>
          Cancel
        </button>
      </dialog>
    </div>
  );
};
