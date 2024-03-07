module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["i.dummyjson.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "daisyui.com",
      },
      {
        protocol: "https",
        hostname: "cdn.cloudflare.steamstatic.com",
      },
    ],
  },
};
