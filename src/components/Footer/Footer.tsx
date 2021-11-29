import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>© Climacteric</li>
        <li>
          <Link href="/" locale="fr">
            <a>Français</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};
