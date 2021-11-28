import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

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

export const SearchByImageModal = ({
  onClose,
  show,
  className,
}: SearchByImageModalProps): JSX.Element => {
  const [foundLabels, setFoundLabels] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const base64imageUrl = reader.result as string;

        if (base64imageUrl) {
          const base64ImageData = base64imageUrl.substring(
            base64imageUrl.indexOf(",") + 1
          );
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
        }
      };

      reader.readAsDataURL(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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

  return (
    <div className={show ? styles["modal"] : styles["visuallyhidden"]}>
      <dialog
        className={`${styles["search-by-image-modal"]} ${className}`}
        open={show ? true : false}
      >
        <h1>Recherche par image</h1>
        <div {...getRootProps()} className={styles.dropzone}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drop some files here, or click to select files</p>
          )}
        </div>
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
