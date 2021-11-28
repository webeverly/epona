import type { NextPage } from "next";
import Head from "next/head";
import styles from "./Home.module.scss";
import { useState } from "react";
import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { ProduceList } from "./ProduceList";

export const Home: NextPage = () => {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Climactérique</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header onQueryChange={setQuery} />

      <main className={styles.main}>
        <ProduceList
          title="Climacteric"
          className={styles.climacteric}
          produce={climactericProduce}
          query={query}
        />
        <ProduceList
          title="Non-Climacteric"
          className={styles["non-climacteric"]}
          produce={climactericProduce}
          query={query}
        />
      </main>

      <Footer />
    </div>
  );
};

const climactericProduce = [
  {
    id: "banana",
    name: "Banana",
  },
  {
    id: "apple",
    name: "Apple",
  },
  {
    id: "cherry",
    name: "Cherry",
  },
];