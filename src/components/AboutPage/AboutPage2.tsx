import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";

import styles from "./AboutPage.module.scss";
import { Header } from "../Header";

interface AboutProps {}

export const AboutPage: NextPage<AboutProps> = () => {
  const { t } = useTranslation(["about", "common"]);
  return (
    <>
      <Head>
        <title>
          {t("common:siteTitle")} :: {t("title")}
        </title>
      </Head>

      <Header />

      <main className={styles.main}>
        <h2>{t("title")}</h2>
        <p>{t("aboutp1")}</p>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {},
});
