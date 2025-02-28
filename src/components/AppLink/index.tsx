import React from 'react';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { Link_Reference_Relationship } from '../../graphql/generated/schema';
import { Link_Type } from '../../graphql/generated/schema';

type Props = Omit<LinkProps, 'href'> & {
	link?: {
		type?: Link_Type | null;
		url?: string | null;
		label?: string | null;
		reference?: Link_Reference_Relationship | any;
	} | null;
	children?: React.ReactNode;
	className?: string;
	onFocus?: () => void;
}

export const AppLink: React.FC<Props> = ({
	link,
	children,
	className,
	...rest
}) => {
	if (!link) return null;

	if (link.type && link.type === Link_Type.Internal) {
		let pageSlug = link.reference?.value?.slug;
		if (pageSlug === 'home') {
			pageSlug = '';
		}

		let pageTypePath: string | null = null;
		switch (link.reference?.relationTo) {
			case 'page':
				pageTypePath = '';
				break;
			default:
				break;
		}

		return (
			<Link
				{...rest}
				href={`${pageTypePath ? `/${pageTypePath}` : ''}/${pageSlug}`}
				className={className}
			>
				{
					children || link.label
				}
			</Link>
		);
	}

	return (
		<a
			{...rest}
			href={`${link.url}`}
			className={className}
		>
			{
				children || link.label
			}
		</a>
	);
};
