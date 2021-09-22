const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: false,
  },
  images: {
    domains: ["localhost", "lh3.googleusercontent.com"],
  },
});
