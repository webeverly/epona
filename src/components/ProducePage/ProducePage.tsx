import Head from "next/head";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Header } from "../Header";
import { loadProduce, ProduceData } from "../../data/produce";
import styles from "./ProducePage.module.scss";

interface ProducePageProps {
  produce: ProduceData;
  className?: string;
}

export const ProducePage = ({
  className,
  produce,
}: ProducePageProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Climactérique :: {produce.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className={`${styles["produce"]} ${className}`}>
        <h2>{produce.name}</h2>
        <p>Type: {produce.type}</p>
        <p>Is climacteric: {nullableBooleanDisplay(produce.isClimacteric)}</p>
        <p>
          Is ethylene sensitive:{" "}
          {nullableBooleanDisplay(produce.isEthyleneSensitive)}
        </p>
        <p>Ethylene emmission: {produce.ethyleneEmmission}</p>
        <p>
          Ethylene sensitivy: {produce.ethyleneSensitivity || "Unavailable"}
        </p>
        {produce.imageUrl && (
          <p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={produce.imageUrl.replace("/public", "")}
              alt={produce.name}
            />
          </p>
        )}

        <Link href="/">
          <a className="button">Home</a>
        </Link>
      </section>
    </div>
  );
};

function nullableBooleanDisplay(b: boolean | null): string {
  return b === null ? "Unavailable" : b ? "Yes" : "No";
}

export const getStaticPaths = async () => {
  const data = await loadProduce("en");

  const paths = data.map((p) => {
    return {
      params: { id: p.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const data = await loadProduce("en");
  const produce = data.find((p) => p.id === id);
  if (!produce) {
    return {
      notFound: true,
    };
  }

  return {
    props: { produce },
  };
};
