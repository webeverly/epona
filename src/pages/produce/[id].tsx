import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  ProducePage,
  getStaticProps as produceGetStaticProps,
  getStaticPaths,
} from "../../components/ProducePage";

export { getStaticPaths };
export default ProducePage;

export const getStaticProps: GetStaticProps = async (context) => {
  const got = await produceGetStaticProps(context);
  return {
    ...got,
    props: {
      ...(got as any).props,
      ...(await serverSideTranslations(context.locale!, [
        "common",
        "about",
        "home",
        "produce",
      ])),
    },
  };
};
