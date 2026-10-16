import React from 'react';
import type { SerializedEditorState } from 'lexical';
import { Container, RichText } from '../../../../components';

interface Props {
	description: SerializedEditorState;
	title: string;
}

export const DefaultHeader: React.FC<Props> = ({ description, title }) => (
	<Container>
		<h1>{title}</h1>
		<RichText data={description} />
	</Container>
);
