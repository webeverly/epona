const withPWA = require("next-pwa");

const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const settings = {
  reactStrictMode: true,
  i18n,
};

module.exports =
  process.env.NODE_ENV === "development" ? settings : withPWA(settings);
