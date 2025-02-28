import type { Metadata } from 'next';

const defaultOpenGraph: Metadata['openGraph'] = {
	type: 'website',
	description: '',
	images: [
		{
			url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/website-og.png`,
		},
	],
	siteName: 'Website Next.js Boilerplate',
	title: 'Website Next.js Boilerplate',
};

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => ({
	...defaultOpenGraph,
	...og,
	images: og?.images !== undefined ? og.images : defaultOpenGraph.images,
});
