import type { Metadata } from 'next';
import { mergeOpenGraph } from '../mergeOpenGraph';
import type { Media } from '../../graphql/generated/schema';

const getImageURL = (image?: Media | null): string => {
	const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL;
	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	let url = `${clientUrl}/payload-og.png`;

	if (image && typeof image === 'object' && 'url' in image) {
		const ogUrl = image.sizes?.card?.url;

		url = ogUrl ? serverUrl + ogUrl : `${serverUrl}${image.url}`;
	}

	return url;
};

export const generateMeta = async (args: {
	doc: {
		meta: {
			description: string;
			image: Media | null;
			title: string;
			noIndex?: boolean
		}
		slug: string | null;
	} | null

}): Promise<Metadata> => {
	const { doc } = args;

	const ogImage = getImageURL(doc?.meta.image);

	const title = doc?.meta.title ? `${doc.meta.title}` : '';

	return {
		description: doc?.meta.description,
		openGraph: mergeOpenGraph({
			description: doc?.meta.description ?? '',
			images: ogImage
				? [
					{
						url: ogImage,
					},
				]
				: undefined,
			title,
			url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
		}),
		title,
		robots: doc?.meta.noIndex ? 'noindex, nofollow' : undefined,
	};
};
