import type { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";

import styles from "./AboutPage.module.scss";
import { Header } from "../Header";

interface AboutProps {}

export const AboutPage: NextPage<AboutProps> = () => {
  const { t } = useTranslation("about");
  return (
    <>
      <Head>
        <title>Climactérique :: About</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <h2>Aboutmoélsac</h2>
        <p>HAI</p>
        <p>{t("wot")}</p>
      </main>
    </>
  );
};
