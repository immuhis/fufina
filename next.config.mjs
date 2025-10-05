/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'fufina'; // repo name

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  basePath: isGithubPages ? `/${repo}` : ''
};
export default nextConfig;
