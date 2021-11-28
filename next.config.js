const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const settings = {
  reactStrictMode: true,
};

module.exports =
  process.env.NODE_ENV === "development" ? settings : withPWA(settings);
