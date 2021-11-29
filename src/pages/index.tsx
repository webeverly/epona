import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  HomeContainer,
  getStaticProps as homeGetStaticProps,
} from "../components/Home/Home.container";

export default HomeContainer;

export const getStaticProps: GetStaticProps = async (context) => {
  const got = await homeGetStaticProps(context);
  return {
    ...got,
    props: {
      ...(got as any).props,
      ...(await serverSideTranslations(context.locale!, [
        "common",
        "home",
        "about",
      ])),
    },
  };
};
