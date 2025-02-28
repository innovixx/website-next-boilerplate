import { Cell, Grid } from '@faceless-ui/css-grid';
import React from 'react';
import type { SerializedEditorState, SerializedLexicalNode } from 'lexical';
import type { Page_Header } from '../../../../graphql/generated/schema';
import { AppImage, Container, RichText } from '../../../../components';
import styles from './styles.module.scss';

interface Props {
	header: Page_Header;
	description: SerializedEditorState<SerializedLexicalNode>;
	title: string;
}

export const FeaturedImageHeader: React.FC<Props> = ({ header, description, title }) => (
	<Container className={styles.container}>
		<Grid>
			<Cell
				cols={7}
				colsL={12}
			>
				<h1 className={styles.title}>{title}</h1>
				<RichText data={description} />
			</Cell>
			<Cell
				cols={5}
				colsL={12}
			>
				<AppImage
					className={styles.image}
					image={header.image}
					imageSize="feature"
					priority
				/>
			</Cell>
		</Grid>
	</Container>
);
