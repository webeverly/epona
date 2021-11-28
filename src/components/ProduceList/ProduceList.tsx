import { FC } from "react";
import styles from "./ProduceList.module.css";

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

export const ProduceList: FC<ProduceListProps> = ({
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
      <ul>
        {produce.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </section>
  );
};
