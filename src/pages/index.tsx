<<<<<<< HEAD
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProduceList } from "../components/ProduceList";
=======
import Home from "./Home";
>>>>>>> c5625df835f70e345ca7ee733877402dbe8d312d

export default function HomePage() {
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

      <div id="modal-root"></div>

      <Footer />
    </div>
  );
}

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
