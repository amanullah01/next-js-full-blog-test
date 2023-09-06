/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_database: "blog-test-dev",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_database: "blog-test-prod",
    },
  };
};

// const nextConfig = {
//   reactStrictMode: true,
//   env: {
//     mongodb_database: "blog-test",
//   },
// };

// module.exports = nextConfig;
