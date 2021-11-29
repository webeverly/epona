const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const settings = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
};

module.exports =
  process.env.NODE_ENV === "development" ? settings : withPWA(settings);
