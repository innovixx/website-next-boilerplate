import React from 'react';
import type { SerializedEditorState, SerializedLexicalNode } from 'lexical';
import { RichText } from '../../../../components';

interface Props {
	description: SerializedEditorState<SerializedLexicalNode>;
	title: string;
}

export const DefaultHeader: React.FC<Props> = ({ description, title }) => (
	<div>
		<h1>{title}</h1>
		<RichText data={description} />
	</div>
);
