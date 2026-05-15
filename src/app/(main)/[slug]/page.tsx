import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { SerializedEditorState, SerializedLexicalNode } from 'lexical';
import { cmsClient } from '../../../graphql';
import { type PagesQuery, type PagesQueryVariables } from '../../../graphql/generated/graphql';
import { RefreshRouteOnSave, RenderBlocks } from '../../../components';
import { PageHeader } from '../../../sections';
import type { GenerateMetaArgs } from '../../../utils/generateMeta';
import { generateMeta } from '../../../utils/generateMeta';
import { PagesDocument } from '../../../graphql/generated/graphql';
import type { Page_Header } from '../../../graphql/generated/schema';

interface Props {
	params: Promise<Record<string, string>>
	searchParams: Promise<Record<string, string>>
}

const getPageData = async (slug: string, preview?: boolean): Promise<PagesQuery | null> => {
	const pageData = await cmsClient.request<PagesQuery, PagesQueryVariables>(PagesDocument, {
		limit: 1,
		page: 1,
		where: {
			slug: {
				equals: slug,
			},
		},
		draft: preview,
	}).catch(() => null);

	return pageData;
};

const Page = async ({ params, searchParams }: Props): Promise<React.ReactElement> => {
	const { slug } = await params;
	const { preview } = await searchParams;

	const pageSlug = !slug ? 'home' : slug;

	const pageData = await getPageData(pageSlug, preview === 'true');
	if (!pageData) {
		notFound();
	}

	const page = pageData.Pages?.docs?.[0];
	if (!page) {
		notFound();
	}

	return (
		<div>
			<PageHeader
				header={page.header as Page_Header}
				title={page.title ?? ''}
				description={page.description as SerializedEditorState<SerializedLexicalNode>}
			/>
			<RenderBlocks
				blocks={page.layout?.blocks ?? []}
			/>
			<RefreshRouteOnSave />
		</div>
	);
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
	const { slug } = await params;
	const { preview } = await searchParams;

	const pageSlug = !slug ? 'home' : slug;

	const pageData = await getPageData(pageSlug, preview === 'true');
	if (!pageData) {
		notFound();
	}

	const page = pageData.Pages?.docs?.[0];

	return generateMeta({
		doc: {
			meta: page?.meta,
			slug: page?.slug ?? null,
		},
	} as GenerateMetaArgs);
}

export default Page;
