const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['raw.githubusercontent.com', 'rerollcdn.com'],
  },
};

module.exports = nextConfig;
