// next.config.js
import path from 'path';

const nextConfig = {
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
};

export default nextConfig;
