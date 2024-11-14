import path from "path";

const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
};

export default nextConfig;
