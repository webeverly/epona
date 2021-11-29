import React from "react";
import Head from "next/head";
import styles from "./Layout.module.scss";
import { Footer } from "../Footer";

export const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className={`root ${styles.container}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
