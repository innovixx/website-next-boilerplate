import React from 'react';
import type { Content as ContentType } from '../../graphql/generated/schema';
import { BlockContainer, RichText } from '../../components';

export const Content: React.FC<ContentType> = ({ content, blockSettings }) => (
	<BlockContainer blockSettings={blockSettings}>
		<RichText
			data={content}
		/>
	</BlockContainer>
);
