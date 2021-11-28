import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { SearchByImageModal } from "../SearchByImageModal";

interface HeaderProps {
  onQueryChange?: (query: string) => void;
}

export const Header = ({ onQueryChange }: HeaderProps): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    onQueryChange?.call(null, newValue);
    setSearchValue(newValue);
  };

  const handleSearchDialog = (searchQuery: string) => {
    if (searchQuery) {
      setSearchValue(searchQuery);
      onQueryChange?.call(null, searchQuery);
    }

    setShowModal(false);
  };

  return (
    <header className={styles.header}>
      <h1>Search moi climactériques</h1>
      {onQueryChange ? (
        <>
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
        </>
      ) : (
        <Link href="/">
          <a>Home</a>
        </Link>
      )}
    </header>
  );
};
