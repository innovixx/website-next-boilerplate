import React from 'react';
import type { Content as ContentType } from '../../graphql/generated/schema';
import { RichText } from '../../components';

export const Content: React.FC<ContentType> = ({ content }) => (
	<div>
		<RichText
			data={content}
		/>
	</div>
);
