import type { NextPage } from "next";
import styles from "./ProduceList.module.scss";

interface ProduceListProps {
  title: string;
  className?: string;
}

export const ProduceList: NextPage<ProduceListProps> = ({
  title,
  className,
}) => {
  return (
    <section className={`${styles["produce-list"]} ${className}`}>
      <h2>{title}</h2>
      <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Banana</li>
        <li>Strawberry</li>
      </ul>
    </section>
  );
};
