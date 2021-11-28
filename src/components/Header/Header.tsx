import { FC, useState } from "react";
import styles from "../../styles/Home.module.css";

interface HeaderProps {
  onQueryChange: (query: string) => void;
}

export const Header: FC<HeaderProps> = ({ onQueryChange }) => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    onQueryChange(newValue);
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={styles.header}>
      <h1>Search moi climactériques</h1>
      <input
        type="text"
        name="query"
        placeholder="Search for fruit"
        onChange={onChange}
      />
      <button onClick={() => setShowModal(true)}>
        Find fruit with picture
      </button>
    </header>
  );
};
