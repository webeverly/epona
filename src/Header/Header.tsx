import type { NextPage } from "next";
import styles from "./Header.module.scss";
import { SyntheticEvent } from "react";

interface HeaderProps {
  onQueryChange: (query: string) => void;
}

export const Header: NextPage<HeaderProps> = ({ onQueryChange }) => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    onQueryChange(newValue);
  };
  return (
    <header className={styles.header}>
      <h1>Search moi climactériques</h1>
      <div className={styles.search}>
        <input
          type="text"
          name="query"
          placeholder="Search for fruit"
          onChange={onChange}
        />{" "}
        <button>Find fruit with picture</button>
      </div>
    </header>
  );
};
