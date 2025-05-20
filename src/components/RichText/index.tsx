
import type { DefaultNodeTypes } from '@payloadcms/richtext-lexical';
import type { JSXConverters, JSXConvertersFunction } from '@payloadcms/richtext-lexical/react';
import { RichText as SerializedRichText } from '@payloadcms/richtext-lexical/react';
import type { SerializedEditorState } from 'lexical';
import React from 'react';
import { AppLink } from '../AppLink';
import styles from './styles.module.scss';
import { Link_Type } from '../../graphql/generated/schema';

type NodeTypes = DefaultNodeTypes

type Props = {
	data: SerializedEditorState
} & React.HTMLAttributes<HTMLDivElement>

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => {
	const converters: JSXConverters<NodeTypes> = {
		...defaultConverters,
		link: ({ node, nodesToJSX }) => {
			const { fields } = node;

			return (
				<AppLink
					link={{
						type: fields.linkType === 'internal' ? Link_Type.Internal : Link_Type.External,
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						reference: fields.doc as any,
						url: fields.url,
					}}
				>
					{nodesToJSX({ nodes: node.children })}
				</AppLink>
			);
		},
	};

	return converters;
};

export const RichText: React.FC<Props> = (props) => {
	const { ...rest } = props;

	return (
		<SerializedRichText
			className={styles.richText}
			converters={jsxConverters}
			{...rest}
		/>
	);
};
