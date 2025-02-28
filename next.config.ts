import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: new URL(`${process.env.NEXT_PUBLIC_SERVER_URL}`).protocol.slice(0, -1) as 'http' | 'https',
				hostname: new URL(`${process.env.NEXT_PUBLIC_SERVER_URL}`).hostname,
			},
		],
	},
	output: 'standalone',
	publicRuntimeConfig: {
		SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
	},
	rewrites: async () => [
		{
			destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/media/:path*`,
			source: '/api/media/:path*',
		},
		{
			destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/:path*`,
			source: '/api/:path*',
		},
		{
			destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/:path*`,
			source: '/admin/:path*',
		},
	],
};

export default nextConfig;
