import Link from "next/link";
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

const regexFrom = (strings: string[], flags: string) => {
  return new RegExp(
    strings
      // Remove empty value
      .filter((s) => s && s.trim().length > 0)
      // Escape special characters
      .map((s) => s.replace(/[()[\]{}*+?^$|#.,\/\\\s-]/g, "\\$&"))
      // Sort for maximal munch
      .sort((a, b) => b.length - a.length)
      .join("|"),
    flags
  );
};

export const ProduceList = ({
  className,
  query,
  title,
  produce,
}: ProduceListProps): JSX.Element => {
  let filteredProduce = produce;

  if (query) {
    var searchRegex = regexFrom(query.split(" "), "gi");
    filteredProduce = produce.filter((produce: ProduceData) => {
      return searchRegex.test(produce.name);
    });
  }

  return (
    <section className={`${styles["produce-list"]} ${className}`}>
      <h2>{title}</h2>
      <ul>
        {filteredProduce.map((p) => (
          <li key={p.id}>
            <Link href={"/produce/" + p.id}>
              <a>{p.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
