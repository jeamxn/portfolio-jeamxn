/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.notion.so",
      "s3.us-west-2.amazonaws.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com"
    ]
  }
};

export default nextConfig;
