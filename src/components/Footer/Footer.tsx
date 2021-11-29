import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import styles from "./Footer.module.scss";

export const Footer = (): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation(["about", "common"]);
  return (
    <footer className={styles.footer}>
      <ul>
        <li>© {t("common:siteTitle")}</li>
        <li>
          <Link
            href={router.asPath}
            locale={router.locale === "en" ? "fr" : "en"}
          >
            <a>{router.locale === "en" ? "Français" : "English"}</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>{t("about:title")}</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};
