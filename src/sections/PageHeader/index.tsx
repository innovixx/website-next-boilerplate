import React from 'react';
import type { SerializedEditorState } from 'lexical';
import type { Page_Header } from '../../graphql/generated/schema';
import { DefaultHeader, FeaturedImageHeader } from './components';

interface Props {
	header: Page_Header;
	description: SerializedEditorState;
	title: string;
}

export const PageHeader: React.FC<Props> = ({ header, description, title }) => (
	<React.Fragment>
		{((): React.ReactElement | null => {
			switch (header.type) {
				case 'default':
					return (
						<DefaultHeader
							description={description}
							title={title}
						/>
					);
				case 'featuredImage':
					return (
						<FeaturedImageHeader
							header={header}
							description={description}
							title={title}
						/>
					);
				default:
					return null;
			}
		})()}
	</React.Fragment>
);
