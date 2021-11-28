import type { NextPage } from "next";
import styles from "./ProduceList.module.scss";

interface ProduceData {
  id: string;
  name: string;
}

interface ProduceListProps {
  title: string;
  className?: string;
  query?: string;
  produce: ProduceData[];
}

export const ProduceList: NextPage<ProduceListProps> = ({
  className,
  query,
  title,
  produce,
}) => {
  if (query) {
    produce = produce.filter((x) => x.name.toLowerCase().includes(query));
  }

  return (
    <section className={`${styles["produce-list"]} ${className}`}>
      <h2>{title}</h2>
      <ul className={query && styles["selected"]}>
        {produce.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </section>
  );
};
