import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  AboutPage,
  getStaticProps as aboutGetStaticProps,
} from "../components/AboutPage";

export default AboutPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const got = await aboutGetStaticProps(context);
  return {
    ...got,
    props: {
      ...(got as any).props,
      ...(await serverSideTranslations(context.locale!, [
        "common",
        "about",
        "home",
      ])),
    },
  };
};
