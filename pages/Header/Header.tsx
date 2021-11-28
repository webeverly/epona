import type { NextPage } from "next";
import styles from "./Header.module.scss";

export const Header: NextPage = () => {
  return (
      <header className={styles.header}>
        <h1>Search moi climactériques</h1>
        <input type="text" name="query" placeholder="Search for fruit" />
        <button >Find fruit with picture</button>
      </header>
  );
};
