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

export const ProduceList = ({
  className,
  query,
  title,
  produce,
}: ProduceListProps): JSX.Element => {
  if (query) {
    produce = produce.filter((x) =>
      x.name.toLowerCase().includes(query.toLowerCase())
    );
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
