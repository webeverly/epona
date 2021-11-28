import { useState } from "react";
import styles from "./Header.module.scss";
import { SearchByImageModal } from "../SearchByImageModal";

interface HeaderProps {
  onQueryChange: (query: string) => void;
}

export const Header = ({ onQueryChange }: HeaderProps): JSX.Element => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    onQueryChange(newValue);
    setSearchValue(newValue);
  };
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchDialog = (searchQuery: string) => {
    if (searchQuery) {
      setSearchValue(searchQuery);
      onQueryChange(searchQuery);
    }
    setShowModal(false);
  };

  return (
    <header className={styles.header}>
      <h1>Search moi climactériques</h1>
      <input
        type="text"
        name="query"
        placeholder="Search for fruit"
        value={searchValue}
        onChange={onChange}
      />
      <button onClick={() => setShowModal(true)}>
        Find fruit with picture
      </button>
      <SearchByImageModal onClose={handleSearchDialog} show={showModal} />
    </header>
  );
};
